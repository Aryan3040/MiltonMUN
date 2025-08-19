from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, Optional

import httpx

from ..config import get_settings


@dataclass
class GroqConfig:
    api_key: str
    model: str
    base_url: str


class GroqService:
    def __init__(self) -> None:
        settings = get_settings()
        if not settings.groq_api_key or not settings.groq_model:
            self.config = None
        else:
            self.config = GroqConfig(
                api_key=settings.groq_api_key,
                model=settings.groq_model,
                base_url=settings.groq_base_url,
            )

    async def chat(self, messages: list[dict[str, str]], temperature: float = 0.2, max_tokens: int = 512) -> dict[str, Any]:
        if not self.config:
            raise RuntimeError("Groq API not configured")
        headers = {
            "Authorization": f"Bearer {self.config.api_key}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": self.config.model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens,
        }
        async with httpx.AsyncClient(base_url=self.config.base_url, timeout=60) as client:
            resp = await client.post("/chat/completions", json=payload, headers=headers)
            resp.raise_for_status()
            return resp.json()


def get_groq_service() -> GroqService:
    return GroqService()


