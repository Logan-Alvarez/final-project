import { Link } from "react-router-dom";
import social from "../images/social.gif";
import trivia from "../images/trivia.jpg";
import ice from "../images/ice.jpg";
import joke from "../images/joke.png";
import favorite from "../images/favorite.jpg";
const Main = () => {
  return (
    <div className="Main">
      <div className="tool-container">
        <div className="feature-container1">
          <Link to={"/Trivia"}>Trivia</Link>
          <p>Test your wits and see who reigns supreme</p>
        </div>

        <div className="feature-container2">
          <Link to={"/icebreakers"}>Icebreakers</Link>
          <p>Don't know what to say? No worries, we got you covered</p>
        </div>

        <div className="feature-container3">
          <Link to={"/Jokes"}>Jokes</Link>
          <p>Be the funny person you were meant to be!</p>

          <p className="warning">Adult Content Ahead</p>
        </div>

        <div className="feature-container4">
          <Link to={"/Favorites"}>Favorites</Link>
          <p>
            Check out your favorited Icebreakers, Jokes, and Trivia to use
            later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
