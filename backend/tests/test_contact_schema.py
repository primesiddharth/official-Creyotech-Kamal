from app.schemas.contactSchema import ContactRequest


def test_contact_request_allows_missing_phone_number():
    payload = {
        "name": "Test User",
        "company_name": "Example Co",
        "email": "user@example.com",
        "business_type": "Digital Marketing",
        "problem_faced": "We need help with our website and lead generation.",
        "solution_required": "Website Development",
        "recaptcha_token": "test-token",
    }

    request = ContactRequest(**payload)

    assert request.name == "Test User"
    assert request.email == "user@example.com"
