from research_agent import research_agent
import os

company = input("Enter company name: ")

report = research_agent(company)

# Create reports folder automatically
os.makedirs("reports", exist_ok=True)

filename = f"reports/{company}.txt"

with open(filename, "w", encoding="utf-8") as file:
    file.write(report)

print("\n")
print(report)

print(f"\nReport saved to {filename}")