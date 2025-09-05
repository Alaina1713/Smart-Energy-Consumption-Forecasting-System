import React, { useState } from "react";

export default function ForecastDashboard(){
  const [meter, setMeter] = useState("meter_001");
  const [horizon, setHorizon] = useState(7);
  const [forecast, setForecast] = useState(null);

  const runForecast = async () => {
    const res = await fetch(`http://localhost:5002/api/forecast?meter_id=${encodeURIComponent(meter)}&horizon=${horizon}`);
    const j = await res.json();
    setForecast(j);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-3">📊 Forecast Energy Usage</h2>
      <label className="block text-sm mb-1">Meter ID</label>
      <input value={meter} onChange={e=>setMeter(e.target.value)} className="border p-2 rounded w-full mb-3" />

      <label className="block text-sm mb-1">Horizon (days)</label>
      <input type="number" value={horizon} onChange={e=>setHorizon(e.target.value)} className="border p-2 rounded w-full mb-3" />

      <button onClick={runForecast} className="bg-indigo-700 text-white px-4 py-2 rounded">Run Forecast</button>

      {forecast && (
        <div className="mt-4 bg-gray-50 p-3 rounded">
          <pre>{JSON.stringify(forecast, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
