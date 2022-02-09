import { Link } from "react-router-dom";
// import mean from "../images/mean.gif";
const Main = () => {
  return (
    <div className="Main">
      <header>
        {/* <img src={mean} alt="Logo" className="Logo" /> */}
        <Link to={"/Favorites"}>
          <button className="feature-container FavButton">Favorites</button>
        </Link>
      </header>

      <header>{/* <img src={SS} alt="Logo" className="Logo" /> */}</header>

      <div className="tool-container">
        <Link to={"/Trivia"}>
          <div className="feature-container">
            <h2>Trivia</h2>
            <p>Wanna See Who's Got The Smarts?</p>
          </div>
        </Link>
        <Link to={"/icebreakers"}>
          <div className="feature-container">
            <h2>Icebreakers</h2>
            <p>Lets Break Some Ice!</p>
          </div>
        </Link>
        <Link to={"/Jokes"}>
          <div className="feature-container">
            <h2>Jokes</h2>
            <p>Be The Funny Person You Were Born To Be!</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
