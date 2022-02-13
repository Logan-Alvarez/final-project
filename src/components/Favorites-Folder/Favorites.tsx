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
