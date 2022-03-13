import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
}

export default App;
