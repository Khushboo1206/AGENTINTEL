import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="agentintel",
    user="postgres",
    password="postgres9767"
)

cursor = conn.cursor()