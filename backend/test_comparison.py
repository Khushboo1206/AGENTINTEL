from comparison_agent import comparison_agent
import os

company1 = input("Enter Company 1: ")
company2 = input("Enter Company 2: ")

report = comparison_agent(
    company1,
    company2
)

print("\n")
print("=" * 80)
print("COMPARISON REPORT")
print("=" * 80)
print(report)

# Save report
os.makedirs("reports", exist_ok=True)

filename = f"reports/{company1}_vs_{company2}.txt"

with open(filename, "w", encoding="utf-8") as file:
    file.write(report)

print(f"\n📄 Saved to {filename}")
