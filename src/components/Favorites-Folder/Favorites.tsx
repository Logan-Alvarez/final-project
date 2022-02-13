import { useEffect, useState } from "react";
import { IceBreakers } from "../../models/Icebreakers";
import { jokes } from "../../models/Joke";
import Data from "../../models/Trivia";
import { getFavIcebreakers } from "../../services/icebreaker-api";
import { fetchFavoriteJokes } from "../../services/joke-api";
import { getFavTrivia } from "../../services/trivia-api";
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
  }

  function hideIceAndTrivia() {
    setHideJoke(false);
    setHideTrivia(true);
    setHideIce(true);
  }

  function hideIceAndJokes() {
    setHideTrivia(false);
    setHideJoke(true);
    setHideIce(true);
  }

  return (
    <div className="Favorites">
      <h1>Favorites</h1>
      <button onClick={hideTriviaAndJokes}>IceBreakers</button>
      <button onClick={hideIceAndTrivia}>Jokes</button>
      <button onClick={hideIceAndJokes}>Trivia</button>
      <a className="Home" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-door-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
        </svg>
      </a>
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
      <footer>
        <a href="/">Home</a>
        <a href="/Trivia">Trivia</a>
        <a href="/Icebreakers">Icebreakers</a>
        <a href="/Jokes">Jokes</a>
      </footer>
    </div>
  );
}

export default Favorites;
