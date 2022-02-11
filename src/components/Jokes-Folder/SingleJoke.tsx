import { useState } from "react";
import { jokes } from "../../models/Joke";
import { postFavoriteJokes } from "../../services/joke-api";

interface Prop {
  joke: jokes;
}

function SingleJoke({ joke }: Prop) {
  const [nsfw, setNsfw] = useState<Boolean>(false);
  function handleFavorite() {
    postFavoriteJokes(joke);
  }
  //Might have to convert NSFW in api to string.
  if (joke.NSFW === true) {
    setNsfw(true);
  } else {
    setNsfw(false);
  }

  //ADDED JOKE FILTER BUT HAS NOT BEEN TESTED. MIGHT NEED TO GO IN JOKESLIST
  return (
    <div>
      {nsfw ? (
        <h1>Joke is naughty</h1>
      ) : (
        <>
          <h1>Single Joke</h1>
          <h3>{joke.setup}</h3>
          <h4>{joke.punchline}</h4>
          <button onClick={handleFavorite} className="smallButton">
            Add To Favorites
          </button>
        </>
      )}
    </div>
  );
}

export default SingleJoke;
