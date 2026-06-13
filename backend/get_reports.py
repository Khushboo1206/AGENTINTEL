from db import cursor

cursor.execute(
    """
    SELECT
        id,
        company_name,
        report_type,
        created_at
    FROM reports
    ORDER BY id DESC
    """
)

rows = cursor.fetchall()

print("\n")

for row in rows:
    print(row)