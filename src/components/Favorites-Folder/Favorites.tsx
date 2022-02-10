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
  return (
    <div className="Favorites">
      <h1>Favorites</h1>
      <a className="Home" href="/">
        Back To Home
      </a>
      <div className="favoritesContainer">
        <IcebreakerFavorites
          onSubmit={handleOnSubmitIcebreakers}
          icebreakers={icebreakers}
        />
        <JokeFavorites onSubmit={handleOnSubmitJokes} jokes={jokes} />
        <TriviaFavorites onSubmit={handleOnSubmitTrivia} trivias={trivias} />
      </div>
    </div>
  );
}

export default Favorites;
