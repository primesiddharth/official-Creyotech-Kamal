from fastapi import APIRouter

from app.controllers.contactController import contactController
from app.schemas.contactSchema import (
    ContactRequest,
    ContactResponse,
)

router = APIRouter(
    prefix="/contact",
    tags=["Contact"],
)


# Accepts contact form submissions
@router.post(
    "/",
    response_model=ContactResponse,
    status_code=200,
)
async def submit_contact_form(
    request: ContactRequest,
):

    return await contactController.submit_contact_form(
        request
    )