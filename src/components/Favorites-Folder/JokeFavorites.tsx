import { ObjectId } from "mongodb";
import { FormEvent } from "react";
import { jokes } from "../../models/Joke";
import { deleteFavoriteJoke } from "../../services/joke-api";
import { deleteFavTrivia } from "../../services/trivia-api";

interface Prop {
  jokes: jokes[];
  onSubmit: (index: number) => void;
}
function JokeFavorites({ jokes, onSubmit }: Prop) {
  function removeFavorite(index: number, e: FormEvent) {
    e.preventDefault();
    let foundId = jokes[index]._id as ObjectId;
    deleteFavoriteJoke(foundId);
    onSubmit(index);
  }

  return (
    <div className="JokeFavorites">
      <div>
        {jokes.map((joke, i) => {
          <div key={i}>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
            <form onSubmit={(e) => removeFavorite(i, e)}>
              <button className="smallButton">- Favorites</button>
            </form>
          </div>;
        })}
      </div>
    </div>
  );
}

export default JokeFavorites;
