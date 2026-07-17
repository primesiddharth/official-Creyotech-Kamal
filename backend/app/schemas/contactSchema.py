from typing import Literal

from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):

    name: str = Field(
        min_length=2,
        max_length=100,
    )

    company_name: str = Field(
        min_length=2,
        max_length=150,
    )

    email: EmailStr

    business_type: str = Field(
        min_length=2,
        max_length=100,
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

    recaptcha_token: str


class ContactResponse(BaseModel):

    success: bool

    message: str