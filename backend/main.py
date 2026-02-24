from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

class ChatRequest(BaseModel):
    question: str


RESUME_DATA = """
Name: Vidhi Gupta
Location: Boda, Madhya Pradesh

Summary:
Frontend / Web Developer with hands-on experience in HTML, CSS, JavaScript, and React.
Currently pursuing MCA at Banaras Hindu University.

Education:
- MCA, Banaras Hindu University (Ongoing)
- BCA, DAVV Indore
- 12th PCM, Arjun Convent Higher Secondary School (2021)

Technical Skills:
Web: HTML5, CSS3, JavaScript (ES6), React
Languages: C, C++, Python
Database: SQL, MySQL
Tools: Git, GitHub, VS Code, Jupyter Notebook, Google Colab

Project:
Live Client Website – The Weds Memories

Internship:
Data Analyst Intern – Elevate Labs (May 2024 – June 2024)
Worked on data cleaning and visualization using Python and Matplotlib.
"""

@app.get("/")
def home():
    return {"message": "Portfolio Backend Running"}


@app.post("/chat")
def chat(request: ChatRequest):

    prompt = f"""
You are a professional AI assistant representing Vidhi Gupta.

Your responsibilities:

1. Answer questions strictly based on the resume data provided.
2. If asked about skills, explain them briefly using knowledge consistent with her resume.
3. If asked behavioral questions (e.g., strengths, why hire you), answer confidently using resume context.
4. If asked technical depth questions (e.g., explain React, explain FastAPI), give a short professional explanation aligned with her experience level.
5. If information is not present in resume, respond:
   "This information is not mentioned in Vidhi's resume."
6. Keep responses concise, clear, and professional.

Resume Data:
{RESUME_DATA}

User Question:
{request.question}
"""

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "mistralai/mistral-7b-instruct",
            "messages": [
                {"role": "user", "content": prompt}
            ]
        }
    )

    return response.json()