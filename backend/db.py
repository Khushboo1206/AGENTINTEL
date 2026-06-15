import psycopg2


def get_connection():

    return psycopg2.connect(

        host="localhost",

        database="agentintel",

        user="postgres",

        password="postgres9767"

    )