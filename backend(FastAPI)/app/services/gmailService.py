import base64
import json
import os
import tempfile
from typing import List, Optional
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = [
    "https://www.googleapis.com/auth/gmail.send"
]


class GmailService:

    def __init__(self):
        self.service = self._authenticate()

    def _authenticate(self):

        creds = None

        credentials_file = "credentials/credentials.json"
        token_file = "token.json"

        # ===========================
        # Railway Environment Support
        # ===========================

        google_credentials = os.getenv("GOOGLE_CREDENTIALS")
        google_token = os.getenv("GOOGLE_TOKEN")

        if google_credentials and google_token:

            temp_dir = tempfile.mkdtemp()

            credentials_file = os.path.join(
                temp_dir,
                "credentials.json",
            )

            token_file = os.path.join(
                temp_dir,
                "token.json",
            )

            with open(credentials_file, "w", encoding="utf-8") as f:
                f.write(google_credentials)

            with open(token_file, "w", encoding="utf-8") as f:
                f.write(google_token)

        # ===========================
        # Load Existing Token
        # ===========================

        if os.path.exists(token_file):

            creds = Credentials.from_authorized_user_file(
                token_file,
                SCOPES,
            )

        # ===========================
        # Refresh Token
        # ===========================

        if creds and creds.expired and creds.refresh_token:

            creds.refresh(Request())

            # Update Railway/local token file
            with open(token_file, "w", encoding="utf-8") as token:
                token.write(creds.to_json())

        # ===========================
        # First Time Login (Local Only)
        # ===========================

        elif not creds:

            flow = InstalledAppFlow.from_client_secrets_file(
                credentials_file,
                SCOPES,
            )

            creds = flow.run_local_server(port=0)

            with open(token_file, "w", encoding="utf-8") as token:
                token.write(creds.to_json())

        return build(
            "gmail",
            "v1",
            credentials=creds,
        )

    def send_email(
        self,
        to_email: str,
        subject: str,
        html_body: str,
        attachments: Optional[List[str]] = None,
    ):

        message = MIMEMultipart()

        message["to"] = to_email
        message["subject"] = subject

        message.attach(
            MIMEText(
                html_body,
                "html",
            )
        )

        if attachments:

            for file_path in attachments:

                with open(file_path, "rb") as file:

                    attachment = MIMEApplication(file.read())

                    attachment.add_header(
                        "Content-Disposition",
                        "attachment",
                        filename=os.path.basename(file_path),
                    )

                    message.attach(attachment)

        raw = base64.urlsafe_b64encode(
            message.as_bytes()
        ).decode()

        response = self.service.users().messages().send(
            userId="me",
            body={"raw": raw},
        ).execute()

        return response


gmailService = GmailService()