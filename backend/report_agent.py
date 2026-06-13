from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def report_agent(
    company,
    research_data,
    competitor_data,
    swot_data
):

    prompt = f"""
You are a senior strategy consultant.

Create a professional executive report.

Company:
{company}

Research Data:
{research_data}

Competitor Analysis:
{competitor_data}

SWOT Analysis:
{swot_data}

Generate:

# Executive Summary

# Company Overview

# Competitive Landscape

# SWOT Summary

# Growth Opportunities

# Strategic Recommendations

# Final Verdict
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