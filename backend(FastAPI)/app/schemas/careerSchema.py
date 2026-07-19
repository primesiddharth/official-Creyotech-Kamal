from pydantic import BaseModel, EmailStr, Field


class CareerResponse(BaseModel):

    success: bool

    message: str