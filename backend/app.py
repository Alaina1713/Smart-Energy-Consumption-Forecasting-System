from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import pandas as pd
import numpy as np
from lstm_model import forecast_energy, detect_anomalies

app = Flask(__name__)
CORS(app)

# --- DB connection ---
def get_db_connection():
    conn = sqlite3.connect("energy.db")
    conn.row_factory = sqlite3.Row
    return conn

# --- API: Forecast ---
@app.route("/api/forecast", methods=["GET"])
def forecast():
    meter_id = request.args.get("meter_id", "meter_001")
    horizon = int(request.args.get("horizon", 7))

    conn = get_db_connection()
    df = pd.read_sql_query("SELECT * FROM energy_readings WHERE meter_id=? ORDER BY timestamp",
                           conn, params=(meter_id,))
    conn.close()

    predictions, acc = forecast_energy(df["consumption"].values, horizon)

    return jsonify({
        "meter_id": meter_id,
        "forecast": predictions.tolist(),
        "metric": "kWh",
        "accuracy": acc
    })

# --- API: Anomaly Detection ---
@app.route("/api/anomalies", methods=["GET"])
def anomalies():
    conn = get_db_connection()
    df = pd.read_sql_query("SELECT * FROM energy_readings ORDER BY timestamp DESC LIMIT 100",
                           conn)
    conn.close()

    flagged = detect_anomalies(df["consumption"].values)
    return jsonify({"anomalies": flagged})

if __name__ == "__main__":
    app.run(port=5002, debug=True)
