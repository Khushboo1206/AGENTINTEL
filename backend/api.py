from flask import Flask, request, jsonify

from flask_cors import CORS

from research_agent import research_agent
from swot_agent import swot_agent
from comparison_agent import comparison_agent

from history_service import (
    save_history,
    get_history
)

app = Flask(__name__)

CORS(app)


# =========================
# Home Endpoint
# =========================

@app.route("/")
def home():

    return jsonify({

        "message":

        "AgentIntel API Running 🚀"

    })


# =========================
# Research Endpoint
# =========================

@app.route(
    "/research",
    methods=["POST"]
)

def research():

    try:

        data = request.get_json()

        company = data["company"]

        report = research_agent(
            company
        )

        save_history(
            company,
            "Research"
        )

        return jsonify({

            "company": company,

            "report": report

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# =========================
# SWOT Endpoint
# =========================

@app.route(
    "/swot",
    methods=["POST"]
)

def swot():

    try:

        data = request.get_json()

        company = data["company"]

        report = swot_agent(
            company
        )

        save_history(
            company,
            "SWOT"
        )

        return jsonify({

            "company": company,

            "swot": report

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# =========================
# Compare Endpoint
# =========================

@app.route(
    "/compare",
    methods=["POST"]
)

def compare():

    try:

        data = request.get_json()

        company1 = data["company1"]

        company2 = data["company2"]

        report = comparison_agent(

            company1,

            company2

        )

        save_history(

            f"{company1} vs {company2}",

            "Compare"

        )

        return jsonify({

            "company1": company1,

            "company2": company2,

            "comparison_report": report

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# =========================
# History Endpoint
# =========================

@app.route(
    "/history",
    methods=["GET"]
)

def history():

    try:

        history_data = get_history()

        return jsonify(

            history_data

        )

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# =========================
# Run Server
# =========================

if __name__ == "__main__":

    app.run(

        host="0.0.0.0",

        port=5000,

        debug=True

    )
