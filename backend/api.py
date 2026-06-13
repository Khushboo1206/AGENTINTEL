from flask import Flask, request, jsonify

from research_agent import research_agent
from comparison_agent import comparison_agent

app = Flask(__name__)


@app.route("/")
def home():
    return {
        "message": "AgentIntel API Running"
    }


@app.route("/research", methods=["POST"])
def research():

    data = request.get_json()

    company = data["company"]

    report = research_agent(company)

    return jsonify({
        "company": company,
        "report": report
    })


@app.route("/compare", methods=["POST"])
def compare():

    data = request.get_json()

    company1 = data["company1"]
    company2 = data["company2"]

    report = comparison_agent(
        company1,
        company2
    )

    return jsonify({
        "comparison": report
    })


if __name__ == "__main__":
    app.run(debug=True)