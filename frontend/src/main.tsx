import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
// import Login from "./pages/authentication/Login.tsx";
import Register from "./pages/authentication/Register.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);
