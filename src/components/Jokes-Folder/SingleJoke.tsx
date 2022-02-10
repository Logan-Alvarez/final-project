import { jokes } from "../../models/Joke";
import { postFavoriteJokes } from "../../services/joke-api";

interface Prop {
  joke: jokes;
}

function SingleJoke({ joke }: Prop) {
  function handleFavorite() {
    postFavoriteJokes(joke);
  }

  return (
    <div>
      <h1>Single Joke</h1>
      <h3>{joke.setup}</h3>
      <h4>{joke.punchline}</h4>
      <button onClick={handleFavorite} className="smallButton">
        Add To Favorites
      </button>
    </div>
  );
}

export default SingleJoke;
