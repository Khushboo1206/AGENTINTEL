from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from db import get_connection

auth = Blueprint("auth", __name__)


# REGISTER
@auth.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({
            "error": "All fields are required"
        }), 400

    password_hash = generate_password_hash(password)

    conn = get_connection()
    cur = conn.cursor()

    try:

        cur.execute(
            """
            INSERT INTO users (name, email, password_hash)
            VALUES (%s, %s, %s)
            """,
            (name, email, password_hash)
        )

        conn.commit()

        return jsonify({
            "message": "User registered successfully"
        }), 201

    except Exception:

        conn.rollback()

        return jsonify({
            "error": "Email already exists"
        }), 400

    finally:

        cur.close()
        conn.close()


# LOGIN
@auth.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "error": "Email and password are required"
        }), 400

    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        """
        SELECT id, password_hash
        FROM users
        WHERE email = %s
        """,
        (email,)
    )

    user = cur.fetchone()

    cur.close()
    conn.close()

    if not user:
        return jsonify({
            "error": "Invalid email or password"
        }), 401

    if not check_password_hash(user[1], password):
        return jsonify({
            "error": "Invalid email or password"
        }), 401

    token = create_access_token(
        identity=str(user[0])
    )

    return jsonify({
        "message": "Login successful",
        "token": token
    }), 200