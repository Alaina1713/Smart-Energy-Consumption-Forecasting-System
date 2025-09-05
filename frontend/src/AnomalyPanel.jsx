import React, { useState, useEffect } from "react";

export default function AnomalyPanel() {
  const [anomalies, setAnomalies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/api/anomalies")
      .then((r) => r.json())
      .then((d) => setAnomalies(d.anomalies));
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="font-bold text-xl mb-4 text-indigo-300 flex items-center">
        🚨 Anomaly Detection
      </h2>

      {anomalies.length === 0 && (
        <p className="text-gray-400 text-sm">No anomalies detected.</p>
      )}

      <ul className="space-y-3 max-h-[400px] overflow-y-auto">
        {anomalies.map((a, i) => (
          <li
            key={i}
            className="p-3 bg-red-600/20 border-l-4 border-red-400 rounded-lg text-sm text-red-50 shadow-sm hover:scale-105 transform transition-all duration-200"
          >
            <p className="font-medium">Spike Detected</p>
            <p>
              <span className="font-semibold">Index:</span> {a.index}{" "}
              <span className="font-semibold ml-2">Value:</span> {a.value} kWh
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
