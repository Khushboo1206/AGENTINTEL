from tavily import TavilyClient
from dotenv import load_dotenv
import os

load_dotenv()

client = TavilyClient(
    api_key=os.getenv("TAVILY_API_KEY")
)

def search_agent(company):

    response = client.search(
        query=f"{company} company overview products services",
        search_depth="advanced",
        max_results=5
    )

    results = []

    for item in response["results"]:

        results.append(
            f"""
Title: {item['title']}

Content:
{item['content']}
"""
        )

    return "\n\n".join(results)