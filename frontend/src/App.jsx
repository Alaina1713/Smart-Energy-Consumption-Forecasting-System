import React from "react";
import ForecastDashboard from "./ForecastDashboard";
import AnomalyPanel from "./AnomalyPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 text-white p-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight drop-shadow-lg">
              ⚡ Smart Energy Consumption Forecasting
            </h1>
            <p className="text-sm opacity-80 mt-1">
              IoT-driven energy insights • LSTM-powered forecasting • Anomaly detection
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md shadow-md">
              Demo Accuracy ~86%
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        {/* Forecast Panel */}
        <div className="md:col-span-2">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <ForecastDashboard />
          </div>
        </div>

        {/* Anomaly Panel */}
        <div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <AnomalyPanel />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-700 mt-12">
        Built by <span className="text-indigo-400 font-semibold">Alaina Rahim</span> • © 2025
      </footer>
    </div>
  );
}
