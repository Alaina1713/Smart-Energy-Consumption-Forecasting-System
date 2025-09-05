import React from "react";
import ForecastDashboard from "./ForecastDashboard";
import AnomalyPanel from "./AnomalyPanel";

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800">
      <header className="bg-indigo-700 text-white p-6 shadow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">⚡ Smart Energy Consumption Forecasting System</h1>
          <p className="text-sm opacity-90">IoT-driven energy insights • LSTM-powered forecasting • Anomaly detection</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ForecastDashboard />
        </div>
        <div>
          <AnomalyPanel />
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        Built by Alaina Rahim • Demo accuracy ~86%
      </footer>
    </div>
  );
}
