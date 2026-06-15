from openai import OpenAI
from dotenv import load_dotenv
from search_agent import search_agent
import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def swot_agent(company):

    search_results = search_agent(company)

    prompt = f"""
You are a senior business strategy consultant.

Below is real company information collected from the web.

{search_results}

Create a detailed SWOT Analysis.

Provide ONLY these sections:

# Strengths

# Weaknesses

# Opportunities

# Threats

Rules:
- Use the provided information.
- Do not create a company overview.
- Do not explain products/services.
- Focus only on SWOT.
- Mention uncertainty where information is limited.
"""

    response = client.chat.completions.create(
        model="deepseek/deepseek-chat-v3-0324",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.2
    )

    return response.choices[0].message.content