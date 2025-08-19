from typing import Annotated

from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from .db import get_db


DbSessionDep = Annotated[AsyncSession, Depends(get_db)]



