import httpx

from fastapi import HTTPException

from app.core.config import settings


class RecaptchaService:

    # Google reCAPTCHA verification endpoint
    VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"

    # Verifies the reCAPTCHA token received from the frontend
    async def verify_token(
        self,
        token: str,
    ) -> bool:

        async with httpx.AsyncClient() as client:

            response = await client.post(
                self.VERIFY_URL,
                data={
                    "secret": settings.RECAPTCHA_SECRET_KEY,
                    "response": token,
                },
            )

        result = response.json()

        if not result.get("success"):

            raise HTTPException(
                status_code=400,
                detail="Invalid reCAPTCHA token",
            )

        return True


# Singleton instance used throughout the application
recaptchaService = RecaptchaService()
