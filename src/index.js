import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "hover.css"
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App";


// AOS Animation initialization
AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
