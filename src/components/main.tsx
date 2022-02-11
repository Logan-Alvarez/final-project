import { Link } from "react-router-dom";
import social from "../images/social.gif";
import trivia from "../images/trivia.jpg";
import ice from "../images/ice.jpg";
import joke from "../images/joke.png";
import favorite from "../images/favorite.jpg";
const Main = () => {
  return (
    <div className="Main">
      <header className="header">Social Spark</header>
      <div className="tool-container">
        <Link to={"/Trivia"}>
          <div className="feature-container">
            <img src={trivia} alt="trivia" className="mainlinks" />
          </div>
        </Link>

        <Link to={"/icebreakers"}>
          <div className="feature-container">
            <img src={ice} alt="" className="mainlinks" />
          </div>
        </Link>

        <Link to={"/Jokes"}>
          <div className="feature-container">
            <img src={joke} alt="" className="mainlinks" />
          </div>
        </Link>
      </div>
      <div className="feature-container">
        <Link to={"/Favorites"}>
          <img src={favorite} alt="" className="mainlinks" />
        </Link>
      </div>
    </div>
  );
};

export default Main;
