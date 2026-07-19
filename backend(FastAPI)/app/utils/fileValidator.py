import os

from fastapi import HTTPException
from fastapi import UploadFile


class FileValidator:

    MAX_SIZE = 5 * 1024 * 1024  # 5 MB

    RESUME_EXTENSIONS = {
        ".pdf",
        ".doc",
        ".docx",
    }

    DOCUMENT_EXTENSIONS = {
        ".pdf",
        ".jpg",
        ".jpeg",
        ".png",
    }

    def validate_resume(
        self,
        file: UploadFile,
    ):

        extension = os.path.splitext(
            file.filename
        )[1].lower()

        if extension not in self.RESUME_EXTENSIONS:

            raise HTTPException(
                status_code=400,
                detail="Resume must be PDF, DOC or DOCX.",
            )

    def validate_document(
        self,
        file: UploadFile,
        document_name: str,
    ):

        extension = os.path.splitext(
            file.filename
        )[1].lower()

        if extension not in self.DOCUMENT_EXTENSIONS:

            raise HTTPException(
                status_code=400,
                detail=f"{document_name} must be PDF, JPG, JPEG or PNG.",
            )

    async def validate_size(
        self,
        file: UploadFile,
    ):

        content = await file.read()

        if len(content) > self.MAX_SIZE:

            raise HTTPException(
                status_code=400,
                detail="File size cannot exceed 5 MB.",
            )

        file.file.seek(0)


fileValidator = FileValidator()