from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

response = client.chat.completions.create(
    model="deepseek/deepseek-chat-v3-0324",
    messages=[
        {
            "role": "user",
            "content": "Tell me about GreenMint Labs in 5 points"
        }
    ]
)

print(response.choices[0].message.content)