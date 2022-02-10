import { ObjectId } from "mongodb";
import { jokes } from "../../models/Joke";
import { deleteFavoriteJoke } from "../../services/joke-api";

interface Prop {
  jokes: jokes[];
}
function JokeFavorites({ jokes }: Prop) {
  function removeFavorite(index: number) {
    let foundId = jokes[index]._id as ObjectId;
    deleteFavoriteJoke(foundId);
  }

  return (
    <div className="JokeFavorites">
      {jokes.map((joke, i) => {
        <div key={i}>
          <h3>{joke.setup}</h3>
          <h4>{joke.punchline}</h4>
          <button className="smallButton" onClick={(e) => removeFavorite(i)}>
            - Favorites
          </button>
        </div>;
      })}
    </div>
  );
}

export default JokeFavorites;
