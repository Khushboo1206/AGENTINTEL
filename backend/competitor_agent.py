from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def competitor_agent(company):

    prompt = f"""
You are a business strategy consultant.

Analyze competitors for: {company}

Rules:
- Do not invent facts.
- If data is unavailable, mention it.
- Keep answers concise and professional.

Provide:

# Top Competitors

# Competitor Comparison

For each competitor provide:
- Products/Services
- Strengths
- Weaknesses

# Competitive Advantages

# Market Gaps

# Strategic Insights
"""

    response = client.chat.completions.create(
        model="deepseek/deepseek-chat-v3-0324",
        messages=[
            {
                "role": "system",
                "content": "You are an expert competitive intelligence analyst."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3
    )

    return response.choices[0].message.content