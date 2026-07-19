from fastapi import APIRouter, Form, UploadFile, File

from app.controllers.careerController import careerController
from app.schemas.careerSchema import CareerResponse


router = APIRouter(
    prefix="/career",
    tags=["Career"],
)


@router.post(
    "/",
    response_model=CareerResponse,
)
async def submit_career_form(

    name: str = Form(...),

    whatsapp_number: str = Form(...),

    email: str = Form(...),

    position: str = Form(...),

    recaptcha_token: str = Form(...),

    resume: UploadFile = File(...),

    address_proof: UploadFile = File(...),

    marksheet: UploadFile = File(...),

):

    return await careerController.submit_career_form(
        name,
        whatsapp_number,
        email,
        position,
        recaptcha_token,
        resume,
        address_proof,
        marksheet,
    )