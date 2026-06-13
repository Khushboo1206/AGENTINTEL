from openai import OpenAI
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# OpenRouter Client
client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def research_agent(company):

    prompt = f"""
You are a professional business analyst.

Research the company: {company}

IMPORTANT RULES:
- Do NOT make up facts.
- If information is not publicly available, explicitly say:
  "Information not publicly available".
- Be factual and concise.
- Use clear headings.

Return the report in the following format:

# Company Overview

# Products / Services

# Target Customers

# Business Model

# Key Strengths

# Potential Challenges

# Summary
"""

    response = client.chat.completions.create(
        model="deepseek/deepseek-chat-v3-0324",
        messages=[
            {
                "role": "system",
                "content": "You are an expert market research analyst."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3
    )

    return response.choices[0].message.content