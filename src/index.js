import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather />
    <small class="ms-3">
      <a
        href="https://github.com/Mercy-Kanyi/Weather-Application"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      by Mercy Kanyi
    </small>
  </React.StrictMode>
);

reportWebVitals();
