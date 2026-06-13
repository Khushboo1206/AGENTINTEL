from competitor_agent import competitor_agent

company = input("Enter company name: ")

report = competitor_agent(company)

print("\n")
print("=" * 80)
print("COMPETITOR ANALYSIS")
print("=" * 80)
print(report)                  