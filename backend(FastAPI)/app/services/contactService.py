from app.core.config import settings
from app.core.exceptions import ContactSubmissionException
from app.core.logger import logger
from app.schemas.contactSchema import (
    ContactRequest,
    ContactResponse,
)

from app.services.gmailService import gmailService
from app.services.recaptchaService import recaptchaService
from app.services.templateService import templateService


class ContactService:

    # Handles the complete contact form submission workflow
    async def submit_contact_form(
        self,
        request: ContactRequest,
    ) -> ContactResponse:

        logger.info("Contact form request received.")

        # Step 1: Verify the Google reCAPTCHA token
        # await recaptchaService.verify_token(
        #     request.recaptcha_token,
        # )

        # Step 2: Render the HTML email template
        html_body = templateService.render(
           "contact_email.html",
           {
               "name": request.name,
               "email": request.email,
               "whatsapp_number": request.whatsapp_number,
               "problem_faced": request.problem_faced,
               "solution_required": request.solution_required,
           },
        )

        # Step 3: Send the email using Gmail API
        try:

            gmailService.send_email(
                to_email=settings.GMAIL_SENDER_EMAIL,
                subject="New Contact Form Submission",
                html_body=html_body,
            )

            logger.info("Contact email sent successfully.")

        except Exception:

            logger.exception("Failed to send contact email.")

            raise ContactSubmissionException()

        # Step 4: Return a success response
        return ContactResponse(
            success=True,
            message="Contact form submitted successfully.",
        )


# Singleton instance of ContactService
contactService = ContactService()
