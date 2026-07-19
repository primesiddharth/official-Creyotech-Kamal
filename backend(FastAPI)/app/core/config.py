from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str
    APP_VERSION: str

    GMAIL_SENDER_EMAIL: str

    RECAPTCHA_SITE_KEY: str = ""
    RECAPTCHA_SECRET_KEY: str = ""

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
    )


settings = Settings()