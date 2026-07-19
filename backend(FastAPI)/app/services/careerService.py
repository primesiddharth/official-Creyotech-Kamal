import os
import shutil
from pathlib import Path

from typing import Optional

from fastapi import UploadFile

from app.core.config import settings
from app.core.logger import logger
from app.schemas.careerSchema import CareerResponse
from app.services.gmailService import gmailService
from app.services.templateService import templateService
from app.services.recaptchaService import recaptchaService
from app.utils.fileValidator import fileValidator
from app.utils.fileHelper import fileHelper


UPLOAD_FOLDER = "uploads"


class CareerService:

    # Saves uploaded file temporarily
    async def save_file(
        self,
        file: UploadFile,
    ) -> str:

        os.makedirs(UPLOAD_FOLDER, exist_ok=True)

        unique_filename = fileHelper.generate_filename(
            file.filename,
        )

        file_path = os.path.join(
            UPLOAD_FOLDER,
            unique_filename,
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(
                file.file,
                buffer,
            )

        return file_path

    # Handles complete career application workflow
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
        phone_number: Optional[str] = None,
    ) -> CareerResponse:

        logger.info("Career application request received.")

        # Verify Google reCAPTCHA
        # await recaptchaService.verify_token(
        #     recaptcha_token,
        # )

        # Validate Resume
        fileValidator.validate_resume(resume)
        await fileValidator.validate_size(resume)

        # Validate Address Proof
        fileValidator.validate_document(
            address_proof,
            "Address Proof",
        )
        await fileValidator.validate_size(address_proof)

        # Validate Marksheet
        fileValidator.validate_document(
            marksheet,
            "Marksheet",
        )
        await fileValidator.validate_size(marksheet)

        # Save uploaded files
        resume_path = await self.save_file(resume)
        address_path = await self.save_file(address_proof)
        marksheet_path = await self.save_file(marksheet)

        # Generate HTML email
        html_body = templateService.render(
            "career_email.html",
            {
                "name": name,
                "phone_number": phone_number or "",
                "whatsapp_number": whatsapp_number,
                "email": email,
                "position": position,
            },
        )

        try:

            gmailService.send_email(
                to_email=settings.GMAIL_SENDER_EMAIL,
                subject="New Career Application",
                html_body=html_body,
                attachments=[
                    resume_path,
                    address_path,
                    marksheet_path,
                ],
            )

            logger.info("Career email sent successfully.")

        except Exception as e:

            logger.exception("Failed to send career email.")

            print("Career Gmail Error:", repr(e))
            raise

        finally:

            for path in [
                resume_path,
                address_path,
                marksheet_path,
            ]:

                if Path(path).exists():
                    os.remove(path)

            logger.info("Temporary uploaded files deleted.")

        return CareerResponse(
            success=True,
            message="Career application submitted successfully.",
        )


careerService = CareerService()