from fastapi import UploadFile

from app.schemas.careerSchema import CareerResponse
from app.services.careerService import careerService


class CareerController:

    # Handles incoming career application requests
    async def submit_career_form(
        self,
        name: str,
        whatsapp_number: str,
        email: str,
        position: str,
        recaptcha_token: str,
        resume: UploadFile,
        address_proof: UploadFile,
        marksheet: UploadFile,
    ) -> CareerResponse:

        return await careerService.submit_career_form(
            name,
            whatsapp_number,
            email,
            position,
            recaptcha_token,
            resume,
            address_proof,
            marksheet,
        )


# Singleton instance
careerController = CareerController()