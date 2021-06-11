import React from "react";

import Routes from "./routes";

import logo from "./assets/logo.svg";

import "./styles/global.scss";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
