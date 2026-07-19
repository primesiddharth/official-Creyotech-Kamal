import uuid
import os


class FileHelper:

    # Generates a unique filename
    def generate_filename(
        self,
        filename: str,
    ) -> str:

        unique_id = uuid.uuid4().hex

        return f"{unique_id}_{os.path.basename(filename)}"


fileHelper = FileHelper()