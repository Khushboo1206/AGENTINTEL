from workflow import app
from save_report import save_report
import os

company = input("Enter company name: ")

# Run LangGraph Workflow
result = app.invoke(
    {
        "company": company
    }
)

# Create reports folder if not exists
os.makedirs("reports", exist_ok=True)

# Save TXT Report
filename = f"reports/{company}_langgraph_report.txt"

with open(filename, "w", encoding="utf-8") as file:
    file.write(
        result["final_report"]
    )

# Save Report to PostgreSQL
save_report(
    company,
    "Final Report",
    result["final_report"]
)

print("\n")
print("=" * 80)
print("LANGGRAPH REPORT")
print("=" * 80)

print(result["final_report"])

print(
    f"\n📄 Report saved to {filename}"
)

print(
    "💾 Report saved to PostgreSQL"
)