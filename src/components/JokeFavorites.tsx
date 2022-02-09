import { jokes } from "../models/Joke";
import { postFavoriteJokes } from "../services/joke-api";
import SingleJoke from "./SingleJoke";

interface Prop {
  jokes: jokes[];
}

function JokeFavorites({ jokes }: Prop) {
  return (
    <div className="JokeFavorites">
      {jokes.map((joke, i) => (
        <div key={i}>
          <h1>{joke.setup}</h1>
          <h2>{joke.punchline}</h2>
        </div>
      ))}
    </div>
  );
}

export default JokeFavorites;
