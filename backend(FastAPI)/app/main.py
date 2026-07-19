from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.exceptionHandler import register_exception_handlers
from app.routes.contactRouter import router as contactRouter
from app.routes.careerRouter import router as careerRouter


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://creyotech-official-website.vercel.app/",
        "https://www.creyotech.com/",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def add_cors_headers(request: Request, call_next):
    response = await call_next(request)
    origin = request.headers.get("origin")

    if origin:
        response.headers["access-control-allow-origin"] = origin
        response.headers["access-control-allow-credentials"] = "true"
        response.headers["vary"] = "Origin"

    return response


# Register Global Exception Handlers
register_exception_handlers(app)


@app.get("/")
def home():
    return {
        "app": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "status": "Running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }


app.include_router(contactRouter)
app.include_router(careerRouter)
