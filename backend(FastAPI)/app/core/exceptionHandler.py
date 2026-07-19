from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import JSONResponse

from app.core.exceptions import ContactSubmissionException


def register_exception_handlers(
    app: FastAPI,
):

    @app.exception_handler(
        ContactSubmissionException
    )
    async def contact_submission_exception_handler(
        request: Request,
        exc: ContactSubmissionException,
    ):

        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": str(exc),
            },
        )

    @app.exception_handler(Exception)
    async def global_exception_handler(
        request: Request,
        exc: Exception,
    ):

        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": "Internal Server Error",
            },
        )