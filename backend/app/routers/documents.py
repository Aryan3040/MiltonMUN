from __future__ import annotations

import os
from datetime import datetime
from pathlib import Path

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from ..auth import get_current_user, require_super_admin
from ..config import get_settings
from ..deps import DbSessionDep
from ..models import Document, DocumentType, User
from ..schemas import DocumentOut


router = APIRouter(prefix="/documents", tags=["documents"])


def _ensure_user_dir(base_dir: Path, user_id: int) -> Path:
    user_dir = base_dir / str(user_id)
    user_dir.mkdir(parents=True, exist_ok=True)
    return user_dir


@router.post("/upload", response_model=DocumentOut)
async def upload_document(
    doc_type: DocumentType,
    file: UploadFile = File(...),
    db: DbSessionDep = Depends(),
    user: User = Depends(get_current_user),
):
    settings = get_settings()
    uploads_base = Path(settings.uploads_dir).absolute()
    user_dir = _ensure_user_dir(uploads_base, user.id)

    timestamp = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
    safe_name = f"{timestamp}_{file.filename}"
    dest = user_dir / safe_name

    with dest.open("wb") as out:
        contents = await file.read()
        out.write(contents)

    doc = Document(
        user_id=user.id,
        doc_type=doc_type,
        original_filename=file.filename,
        storage_path=str(dest),
    )
    db.add(doc)
    await db.commit()
    await db.refresh(doc)
    return doc


@router.get("/mine", response_model=list[DocumentOut])
async def list_my_documents(db: DbSessionDep, user: User = Depends(get_current_user)):
    result = await db.execute(select(Document).where(Document.user_id == user.id).order_by(Document.uploaded_at.desc()))
    return list(result.scalars().all())


@router.get("/admin/all", response_model=list[DocumentOut])
async def admin_list_all_documents(db: DbSessionDep, _: User = Depends(require_super_admin)):
    result = await db.execute(select(Document).order_by(Document.uploaded_at.desc()))
    return list(result.scalars().all())


@router.get("/admin/download/{document_id}")
async def admin_download_document(document_id: int, db: DbSessionDep, _: User = Depends(require_super_admin)):
    result = await db.execute(select(Document).where(Document.id == document_id))
    doc = result.scalar_one_or_none()
    if doc is None:
        raise HTTPException(status_code=404, detail="Not found")
    return FileResponse(path=doc.storage_path, filename=doc.original_filename)



