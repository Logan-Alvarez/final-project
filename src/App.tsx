import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Icebreakers } from "./components/Icebreakers-Folder/Icebreakers";
import { Trivia } from "./components/Trivia-Folder/Trivia";
import { Jokes } from "./components/Jokes-Folder/Jokes";
import Favorites from "./components/Favorites-Folder/Favorites";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/icebreakers" element={<Icebreakers />} />
          <Route path="/Trivia" element={<Trivia />} />
          <Route path="/Jokes" element={<Jokes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
