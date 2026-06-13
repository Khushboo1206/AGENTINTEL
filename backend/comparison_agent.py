from openai import OpenAI
from dotenv import load_dotenv
from search_agent import search_agent
import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def comparison_agent(company1, company2):

    data1 = search_agent(company1)

    data2 = search_agent(company2)

    prompt = f"""
You are a senior market intelligence consultant.

Company 1:
{company1}

Information:
{data1}

-----------------------------------

Company 2:
{company2}

Information:
{data2}

Create a comparison report.

Provide:

# Executive Summary

# Products Comparison

# Business Model Comparison

# Target Customers

# Strengths

# Weaknesses

# Competitive Advantages

# Strategic Recommendation

Use only provided information.
Do not invent facts.
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