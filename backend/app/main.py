from __future__ import annotations

import os
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from .config import get_settings
from .db import engine, Base
from .routers import auth as auth_router
from .routers import documents as documents_router
from .routers import agent as agent_router


def ensure_uploads_dir(path: str) -> None:
    p = Path(path)
    p.mkdir(parents=True, exist_ok=True)


def create_app() -> FastAPI:
    settings = get_settings()

    app = FastAPI(title=settings.app_name)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Static serving for uploaded files (primarily for admin downloads)
    ensure_uploads_dir(settings.uploads_dir)
    app.mount("/uploads", StaticFiles(directory=settings.uploads_dir), name="uploads")

    app.include_router(auth_router.router)
    app.include_router(documents_router.router)
    app.include_router(agent_router.router)

    return app


app = create_app()



