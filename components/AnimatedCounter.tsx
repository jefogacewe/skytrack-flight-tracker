@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #040b16;
  color: #e2e8f0;
}

* {
  box-sizing: border-box;
}

::selection {
  background: rgba(33, 196, 255, 0.35);
}

.leaflet-container {
  width: 100%;
  height: 100%;
  background: #071425;
}

.leaflet-control-zoom a {
  background: rgba(15, 23, 42, 0.9) !important;
  color: white !important;
  border-color: rgba(94, 234, 212, 0.2) !important;
}

.flight-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 9999px;
  color: #03131f;
  font-size: 12px;
  font-weight: 700;
  border: 2px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.4);
}

.marker-airborne {
  background: #67e8f9;
}

.marker-delayed {
  background: #fbbf24;
}

.marker-landed {
  background: #34d399;
}

.marker-diverted {
  background: #f97316;
}

.glass-panel {
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(14px);
}

.section-shell {
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(15, 23, 42, 0.78);
  border-radius: 1.5rem;
  box-shadow: 0 12px 35px rgba(2, 6, 23, 0.35);
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #67e8f9, #38bdf8);
  color: #041421;
  font-weight: 600;
  transition: all 0.2s ease;
}

.primary-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 30px rgba(103, 232, 249, 0.3);
}

.secondary-button {
  border: 1px solid rgba(148, 163, 184, 0.25);
  background: rgba(15, 23, 42, 0.8);
  color: #e2e8f0;
  border-radius: 9999px;
}

.text-balance {
  text-wrap: balance;
}

input {
  color: inherit;
}

@media (max-width: 640px) {
  .mobile-stack {
    display: block;
  }
}
