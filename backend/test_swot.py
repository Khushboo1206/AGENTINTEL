from swot_agent import swot_agent

company = input("Enter company name: ")

report = swot_agent(company)

print("\n")
print("=" * 80)
print("SWOT ANALYSIS")
print("=" * 80)
print(report)