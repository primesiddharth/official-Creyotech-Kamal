import asyncio
import io
import unittest
from unittest.mock import AsyncMock, patch

from fastapi import UploadFile

from app.controllers.careerController import careerController


class CareerControllerTests(unittest.TestCase):
    def test_submit_career_form_calls_service_with_all_arguments(self):
        resume = UploadFile(filename="resume.pdf", file=io.BytesIO(b"resume"))
        address_proof = UploadFile(filename="address.pdf", file=io.BytesIO(b"address"))
        marksheet = UploadFile(filename="marksheet.pdf", file=io.BytesIO(b"marksheet"))

        with patch("app.services.careerService.fileValidator.validate_resume"), \
            patch("app.services.careerService.fileValidator.validate_document"), \
            patch("app.services.careerService.fileValidator.validate_size", new=AsyncMock()), \
            patch("app.services.careerService.save_file", new=AsyncMock(return_value="/tmp/file")), \
            patch("app.services.careerService.templateService.render", return_value="<p>Hi</p>"), \
            patch("app.services.careerService.gmailService.send_email"):
            result = asyncio.run(
                careerController.submit_career_form(
                    name="Test User",
                    whatsapp_number="123456789",
                    email="test@example.com",
                    position="Developer",
                    recaptcha_token="token",
                    resume=resume,
                    address_proof=address_proof,
                    marksheet=marksheet,
                )
            )

        self.assertTrue(result.success)
        self.assertIn("submitted successfully", result.message.lower())


if __name__ == "__main__":
    unittest.main()
