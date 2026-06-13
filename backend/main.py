from research_agent import research_agent
from competitor_agent import competitor_agent
from swot_agent import swot_agent
from report_agent import report_agent

import os

company = input("Enter company name: ")

print("\nResearching company...")
research_data = research_agent(company)

print("Analyzing competitors...")
competitor_data = competitor_agent(company)

print("Generating SWOT analysis...")
swot_data = swot_agent(company)

print("Generating final report...")
final_report = report_agent(
    company,
    research_data,
    competitor_data,
    swot_data
)

os.makedirs("reports", exist_ok=True)

filename = f"reports/{company}_final_report.txt"

with open(filename, "w", encoding="utf-8") as file:
    file.write(final_report)

print("\n")
print("=" * 80)
print("FINAL BUSINESS REPORT")
print("=" * 80)

print(final_report)

print(f"\nReport saved to {filename}")
