from __future__ import annotations

from datetime import datetime, timedelta
from typing import Literal, Optional

from pydantic import BaseModel, EmailStr

from .models import DocumentType


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int


class TokenPayload(BaseModel):
    sub: str
    exp: int


class UserBase(BaseModel):
    email: EmailStr


class UserCreate(UserBase):
    password: str
    full_name: str
    school: Optional[str] = None


class UserLogin(UserBase):
    password: str


class UserOut(UserBase):
    id: int
    is_super_admin: bool

    class Config:
        from_attributes = True


class DocumentOut(BaseModel):
    id: int
    doc_type: DocumentType
    original_filename: str
    storage_path: str
    uploaded_at: datetime

    class Config:
        from_attributes = True



