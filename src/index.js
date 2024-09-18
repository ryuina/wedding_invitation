import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/crimson-pro"; // 기본 weight
import "@fontsource/crimson-pro/400.css"; // weight 400 (normal)
import "@fontsource/crimson-pro/700.css"; // weight 700 (bold)
import "@fontsource/nanum-myeongjo"; // 기본 weight
import "@fontsource/nanum-myeongjo/400.css"; // weight 400 (normal)
import "@fontsource/nanum-myeongjo/700.css"; // weight 700 (bold)
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
