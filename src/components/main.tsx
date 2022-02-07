import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Joke from "../models/Joke";
import logo from "../logo.gif";

import { fetchJokes } from "../services/joke-api";

const Main = () => {
  //HOOKS
  const [joke, setJoke] = useState<Joke[]>([]);

  //JOKE useEffect.
  useEffect(() => {
    fetchJokes().then((data) => setJoke(data));
  }, []);

  console.log(joke);
  return (
    <div className="Main">
      <header>
        {/* <h1>Logo</h1> */}
        <img src={logo} alt="Logo" className="Logo" />
      </header>
      <div className="tool-container">
        <Link to={"/Trivia"}>
          <div className="feature-container">
            <h2>Trivia</h2>
            <p>
              Want to see who's the smartest in the room or who knows the most
              random facts?
            </p>
          </div>
        </Link>
        <Link to={"/icebreakers"}>
          <div className="feature-container">
            <h2>Icebreakers</h2>
            <p>
              What do you do for work? Do you like animals? Those are lame
              questions! Be as cool as ice with great icebreakers.
            </p>
          </div>
        </Link>
        <Link to={"/Jokes"}>
          <div className="feature-container">
            <h2>Jokes</h2>
            <p>Be the funny person you were meant to be.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
