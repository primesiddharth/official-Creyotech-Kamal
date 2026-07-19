from app.schemas.contactSchema import (
    ContactRequest,
    ContactResponse,
)

from app.services.contactService import contactService


class ContactController:

    # Handles incoming contact form requests
    async def submit_contact_form(
        self,
        request: ContactRequest,
    ) -> ContactResponse:

        return await contactService.submit_contact_form(
            request
        )


# Singleton instance of ContactController
contactController = ContactController()