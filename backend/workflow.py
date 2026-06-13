from typing import TypedDict
import time

from langgraph.graph import StateGraph, START, END

from research_agent import research_agent
from competitor_agent import competitor_agent
from swot_agent import swot_agent
from report_agent import report_agent


class AgentState(TypedDict):
    company: str
    research: str
    competitors: str
    swot: str
    final_report: str


# Research Agent Node
def research_node(state):

    start = time.time()

    result = research_agent(
        state["company"]
    )

    end = time.time()

    print(
        f"✅ Research Agent completed in {round(end-start,2)} sec"
    )

    return {
        "research": result
    }


# Competitor Agent Node
def competitor_node(state):

    start = time.time()

    result = competitor_agent(
        state["company"]
    )

    end = time.time()

    print(
        f"✅ Competitor Agent completed in {round(end-start,2)} sec"
    )

    return {
        "competitors": result
    }


# SWOT Agent Node
def swot_node(state):

    start = time.time()

    result = swot_agent(
        state["company"]
    )

    end = time.time()

    print(
        f"✅ SWOT Agent completed in {round(end-start,2)} sec"
    )

    return {
        "swot": result
    }


# Report Agent Node
def report_node(state):

    start = time.time()

    result = report_agent(
        state["company"],
        state["research"],
        state["competitors"],
        state["swot"]
    )

    end = time.time()

    print(
        f"✅ Report Agent completed in {round(end-start,2)} sec"
    )

    return {
        "final_report": result
    }


graph = StateGraph(AgentState)

graph.add_node("research", research_node)
graph.add_node("competitor", competitor_node)
graph.add_node("swot", swot_node)
graph.add_node("report", report_node)

graph.add_edge(START, "research")
graph.add_edge("research", "competitor")
graph.add_edge("competitor", "swot")
graph.add_edge("swot", "report")
graph.add_edge("report", END)

app = graph.compile()