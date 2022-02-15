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
  console.log(jokes);

  return (
    <div className="JokeFavorites">
      {jokes.map((joke, i) => (
        <div key={i} className="singleJokeFavorite">
          <h2>Setup: {joke.setup}</h2>
          <h3>Punchline: {joke.punchline}</h3>
          <form onSubmit={(e) => removeFavorite(i, e)}>
            <button className="delete-btn">
              <i className="bi bi-trash-fill"></i>
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default JokeFavorites;
