import React, { useState, useEffect } from "react";

export default function AnomalyPanel(){
  const [anomalies, setAnomalies] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5002/api/anomalies")
      .then(r=>r.json())
      .then(d=>setAnomalies(d.anomalies));
  },[]);

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-3">🚨 Anomaly Detection</h2>
      {anomalies.length === 0 && <p className="text-sm text-gray-600">No anomalies detected.</p>}
      <ul className="space-y-2">
        {anomalies.map((a,i)=>(
          <li key={i} className="p-2 bg-red-50 rounded text-sm">
            Spike at index {a.index} → {a.value} kWh
          </li>
        ))}
      </ul>
    </div>
  );
}
