import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./chart";
import reportWebVitals from "./reportWebVitals";

export const ALERTS_GENERATED_DATA = [
  {
    name: "a",
    alertsCount: 5,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
  {
    name: "b",
    alertsCount: 6,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
  {
    name: "c",
    alertsCount: 9,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
  {
    name: "d",
    alertsCount: 15,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
  {
    name: "e",
    alertsCount: 25,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
  {
    name: "f",
    alertsCount: 36,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App data={ALERTS_GENERATED_DATA} dataKey="alertsCount" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
