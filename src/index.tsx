import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Grommet } from "grommet";

const customTheme = {
  global: {
    colors: {
      // Overriding existing grommet colors
      brand: "#1E3D58",
      focus: "#43B0F1",
      light: "#E8EEF1",
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={customTheme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
