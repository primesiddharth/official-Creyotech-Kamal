from typing import Literal

from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):

    name: str = Field(
        min_length=2,
        max_length=100,
    )

    email: EmailStr

    whatsapp_number: str = Field(
        min_length=10,
        max_length=20,
    )

    problem_faced: str = Field(
        min_length=5,
        max_length=1000,
    )

    solution_required: Literal[
        "Website Development",
        "Web / Cloud Application",
        "Mobile Application",
        "Digital Marketing",
        "Social Media Marketing",
    ]



class ContactResponse(BaseModel):

    success: bool

    message: str