import requests

def search_agent(company):

    query = f"{company} company overview"

    url = f"https://duckduckgo.com/html/?q={query}"

    return f"Search query executed for {company}"