import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Main />} />
      </Router>
    </div>
  );
}

export default App;
