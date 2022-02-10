import { ObjectId } from "mongodb";
import data from "../../models/Trivia";
import { deleteFavTrivia } from "../../services/trivia-api";
import { postFavTrivia } from "../../services/trivia-api";
import SingleTrivia from "../Trivia-Folder/SingleTrivia";

interface Prop {
  trivias: data[];
}

function TriviaFavorites({ trivias }: Prop) {
  function removeFavorite(index: number) {
    let foundId = trivias[index]._id as ObjectId;
    deleteFavTrivia(foundId);
  }

  return (
    <div className="TriviaFavorites">
      {trivias.map((trivia, i) => (
        <div key={i}>
          <h1>{trivia.question}</h1>
          <h4>{trivia.answer}</h4>
          <button className="smallButton" onClick={(e) => removeFavorite(i)}>
            - Favorites
          </button>
        </div>
      ))}
    </div>
  );
}

export default TriviaFavorites;
