import numpy as np

def forecast_energy(series, horizon):
    # Fake LSTM forecast (demo purpose)
    base = np.mean(series[-10:])
    forecast = base + np.random.randn(horizon) * 0.5
    acc = 0.86
    return forecast, acc

def detect_anomalies(series, threshold=2.5):
    anomalies = []
    mean, std = np.mean(series), np.std(series)
    for i, val in enumerate(series):
        if abs(val - mean) > threshold * std:
            anomalies.append({"index": i, "value": float(val)})
    return anomalies
