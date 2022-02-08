import { Link } from "react-router-dom";
import SS from "../images/SS.gif";
const Main = () => {
  return (
    <div className="Main">
      <header>{/* <img src={SS} alt="Logo" className="Logo" /> */}</header>
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
