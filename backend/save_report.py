from db import conn, cursor

def save_report(
    company_name,
    report_type,
    content
):

    query = """
    INSERT INTO reports
    (
        company_name,
        report_type,
        content
    )
    VALUES
    (%s, %s, %s)
    """

    cursor.execute(
        query,
        (
            company_name,
            report_type,
            content
        )
    )

    conn.commit()

    print(
        f"✅ Saved {report_type}"
    )