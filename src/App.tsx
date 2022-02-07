import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Icebreakers } from "./components/Icebreakers";
import { Trivia } from "./components/Trivia";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/icebreakers" element={<Icebreakers />} />
          <Route path="/Jokes" element />
          <Route path="/Trivia" element={<Trivia />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
