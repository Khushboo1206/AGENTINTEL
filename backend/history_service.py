from db import get_connection


def save_history(

    company,

    report_type

):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(

        """
        INSERT INTO history(
            company,
            report_type
        )

        VALUES(

            %s,

            %s

        )
        """,

        (

            company,

            report_type

        )

    )

    conn.commit()

    cursor.close()

    conn.close()


def get_history():

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(

        """
        SELECT

        id,

        company,

        report_type,

        created_at

        FROM history

        ORDER BY created_at DESC
        """
    )

    rows = cursor.fetchall()

    cursor.close()

    conn.close()

    history = []

    for row in rows:

        history.append({

            "id": row[0],

            "company": row[1],

            "type": row[2],

            "created_at": str(row[3])

        })

    return history
