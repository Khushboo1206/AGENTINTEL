from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def swot_agent(company):

    prompt = f"""
You are a senior business consultant.

Create a SWOT analysis for:

{company}

Provide:

# Strengths

# Weaknesses

# Opportunities

# Threats

Rules:
- Be realistic
- Do not invent facts
- Mention uncertainty if information is unavailable
"""

    response = client.chat.completions.create(
        model="deepseek/deepseek-chat-v3-0324",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3
    )

    return response.choices[0].message.content