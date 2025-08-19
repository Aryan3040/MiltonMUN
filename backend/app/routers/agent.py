from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException

from ..auth import get_current_user
from ..models import User
from ..services.groq_service import get_groq_service, GroqService


router = APIRouter(prefix="/agent", tags=["agent"])


@router.post("/chat")
async def chat(messages: list[dict[str, str]], _: User = Depends(get_current_user)):
    groq: GroqService = get_groq_service()
    try:
        data = await groq.chat(messages)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    return data


