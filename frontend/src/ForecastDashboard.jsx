import React, { useState } from "react";

export default function ForecastDashboard() {
  const [meter, setMeter] = useState("meter_001");
  const [horizon, setHorizon] = useState(7);
  const [forecast, setForecast] = useState(null);

  const runForecast = async () => {
    try {
      const res = await fetch(
        `http://localhost:5002/api/forecast?meter_id=${encodeURIComponent(
          meter
        )}&horizon=${horizon}`
      );
      const j = await res.json();
      setForecast(j);
    } catch (err) {
      console.error("Forecast fetch failed:", err);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="font-bold text-xl mb-4 text-indigo-300 flex items-center">
        📊 Forecast Energy Usage
      </h2>

      <div className="mb-4">
        <label className="block text-sm mb-1 text-gray-200">Meter ID</label>
        <input
          value={meter}
          onChange={(e) => setMeter(e.target.value)}
          className="w-full p-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1 text-gray-200">Horizon (days)</label>
        <input
          type="number"
          value={horizon}
          onChange={(e) => setHorizon(e.target.value)}
          className="w-full p-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
        />
      </div>

      <button
        onClick={runForecast}
        className="bg-indigo-700 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium transition-all duration-200"
      >
        Run Forecast
      </button>

      {forecast && (
        <div className="mt-6 grid gap-3 max-h-[400px] overflow-y-auto">
          {forecast.map((f, idx) => (
            <div
              key={idx}
              className="p-3 bg-indigo-900/30 rounded-lg border-l-4 border-indigo-400 shadow-sm hover:scale-105 transform transition-all duration-200"
            >
              <p className="font-semibold">Day {idx + 1}</p>
              <p>
                Predicted Consumption:{" "}
                <span className="text-indigo-200 font-medium">{f.prediction} kWh</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
