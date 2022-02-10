import { ObjectId } from "mongodb";
import { FormEvent } from "react";
import data from "../../models/Trivia";
import { deleteFavTrivia } from "../../services/trivia-api";
import { postFavTrivia } from "../../services/trivia-api";
import SingleTrivia from "../Trivia-Folder/SingleTrivia";

interface Prop {
  trivias: data[];
  onSubmit: (index: number) => void;
}

function TriviaFavorites({ trivias, onSubmit }: Prop) {
  function removeFavorite(index: number, e: FormEvent) {
    e.preventDefault();
    let foundId = trivias[index]._id as ObjectId;
    deleteFavTrivia(foundId);
    onSubmit(index);
  }

  return (
    <div className="TriviaFavorites">
      {trivias.map((trivia, i) => (
        <div key={i}>
          <h1>{trivia.question}</h1>
          <h4>{trivia.answer}</h4>
          <form onSubmit={(e) => removeFavorite(i, e)}>
            <button className="smallButton">- Favorites</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default TriviaFavorites;
