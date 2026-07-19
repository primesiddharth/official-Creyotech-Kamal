from fastapi import HTTPException


class ContactSubmissionException(HTTPException):

    def __init__(self):

        super().__init__(
            status_code=500,
            detail="Unable to submit contact form. Please try again later.",
        )