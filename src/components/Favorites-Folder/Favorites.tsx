import { useEffect, useState } from "react";
import { IceBreakers } from "../../models/Icebreakers";
import { jokes } from "../../models/Joke";
import Data from "../../models/Trivia";
import { getFavIcebreakers } from "../../services/icebreaker-api";
import { fetchFavoriteJokes } from "../../services/joke-api";
import { getFavTrivia } from "../../services/trivia-api";
import Footer from "../Footer";
import IcebreakerFavorites from "./IcebreakerFavorites";
import FavoritesList from "./IcebreakerFavorites";
import JokeFavorites from "./JokeFavorites";
import TriviaFavorites from "./TriviaFavorites";

function Favorites() {
  const [icebreakers, setIcebreakers] = useState<IceBreakers[]>([]);
  const [jokes, setJokes] = useState<jokes[]>([]);
  const [trivias, setTrivia] = useState<Data[]>([]);
  const [hideIce, setHideIce] = useState<Boolean>(false);
  const [hideTrivia, setHideTrivia] = useState<Boolean>(false);
  const [hideJoke, setHideJoke] = useState<Boolean>(false);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    fetchFavoriteJokes().then((data) => setJokes(data));
    getFavIcebreakers().then((data) => setIcebreakers(data));
    getFavTrivia().then((data) => setTrivia(data));
  }, []);

  function handleOnSubmitIcebreakers(index: number) {
    setIcebreakers((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  }
  function handleOnSubmitTrivia(index: number) {
    setTrivia((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }
  function handleOnSubmitJokes(index: number) {
    setJokes((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  function hideTriviaAndJokes() {
    setHideIce(false);
    setHideTrivia(true);
    setHideJoke(true);
    setTitle("Icebreakers");
  }

  function hideIceAndTrivia() {
    setHideJoke(false);
    setHideTrivia(true);
    setHideIce(true);
    setTitle("Jokes");
  }

  function hideIceAndJokes() {
    setHideTrivia(false);
    setHideJoke(true);
    setHideIce(true);
    setTitle("Trivia");
  }

  return (
    <div className="Favorites">
      <a className="back" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </a>
      {title === "" ? <h2>Favorites</h2> : <h2>Favorite - {title}</h2>}
      <div className="fav-buttons">
        <button onClick={hideTriviaAndJokes} className="fav-btn">
          IceBreakers
        </button>
        <button onClick={hideIceAndTrivia} className="fav-btn">
          Jokes
        </button>
        <button onClick={hideIceAndJokes} className="fav-btn">
          Trivia
        </button>
      </div>
      {hideIce ? null : (
        <div className="favoritesContainer">
          <IcebreakerFavorites
            onSubmit={handleOnSubmitIcebreakers}
            icebreakers={icebreakers}
          />
        </div>
      )}
      {hideJoke ? null : (
        <div className="favoritesContainer">
          <JokeFavorites onSubmit={handleOnSubmitJokes} jokes={jokes} />
        </div>
      )}
      {hideTrivia ? null : (
        <div className="favoritesContainer">
          <TriviaFavorites onSubmit={handleOnSubmitTrivia} trivias={trivias} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Favorites;
