import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Icebreakers } from "./components/Icebreakers";
import { Jokes } from "./components/Jokes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/icebreakers" element={<Icebreakers />} />
          <Route path="/Jokes" element={<Jokes />} />
          <Route path="/Trivia" element />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
