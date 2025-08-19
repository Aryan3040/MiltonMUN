from __future__ import annotations

from functools import lru_cache
from typing import Optional

from semantic_kernel import Kernel
from semantic_kernel.connectors.ai.open_ai import AzureChatCompletion

from ..config import get_settings


class SemanticKernelService:
    def __init__(self) -> None:
        self.settings = get_settings()

    def create_kernel(self) -> Kernel:
        kernel = Kernel()
        if not (self.settings.azure_openai_endpoint and self.settings.azure_openai_api_key and self.settings.azure_openai_deployment):
            # Kernel without connector; useful for local or test. Caller can check and handle.
            return kernel

        connector = AzureChatCompletion(
            deployment_name=self.settings.azure_openai_deployment,
            endpoint=self.settings.azure_openai_endpoint,
            api_key=self.settings.azure_openai_api_key,
            api_version=self.settings.azure_openai_api_version,
        )
        kernel.add_service(connector)
        return kernel


@lru_cache
def get_semantic_kernel_service() -> SemanticKernelService:
    return SemanticKernelService()



