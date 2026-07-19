# ContactHub

A production-ready FastAPI backend for Contact and Career forms with Gmail API integration, Google reCAPTCHA, file validation, and email attachments.

---

## Features

- Contact Form API
- Career Form API
- Google reCAPTCHA Verification
- Gmail API Integration
- HTML Email Templates
- Resume Upload
- Address Proof Upload
- Marksheet Upload
- File Type Validation
- File Size Validation
- UUID File Naming
- Layered Architecture
- FastAPI + Pydantic

---

## Tech Stack

- Python
- FastAPI
- Gmail API
- Google OAuth
- Google reCAPTCHA
- Jinja2
- Pydantic

---

## Project Structure

```
ContactHub
│
├── app
│   ├── controllers
│   ├── core
│   ├── routes
│   ├── schemas
│   ├── services
│   ├── templates
│   └── utils
│
├── credentials
├── uploads
├── requirements.txt
├── run.py
└── README.md
```

---

## Installation

```bash
git clone <repository-url>

cd ContactHub

pip install -r requirements.txt
```

---

## Run

```bash
python run.py
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

## APIs

### POST /contact

Submits a contact form and sends an email using Gmail API.

---

### POST /career

Submits a career application with:

- Resume
- Address Proof
- Marksheet

and sends them as Gmail attachments.

---

## Validation

Resume

- PDF
- DOC
- DOCX

Address Proof

- PDF
- JPG
- JPEG
- PNG

Marksheet

- PDF
- JPG
- JPEG
- PNG

Maximum Upload Size

- 5 MB

---

## Security

- Google reCAPTCHA
- Gmail OAuth Authentication
- UUID File Names
- Environment Variables
- File Validation

---

## Author

shlok pallav
shlokpallav@gmail.com
7007132470