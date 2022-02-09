import data from "../../models/Trivia";
import { postFavTrivia } from "../../services/trivia-api";
import SingleTrivia from "../Trivia-Folder/SingleTrivia";

interface Prop {
  trivias: data[];
}

function TriviaFavorites({ trivias }: Prop) {
  return (
    <div className="TriviaFavorites">
      {trivias.map((trivia, i) => {
        <div>
          <h2>{trivia.category}</h2>
          <h3>{trivia.question}</h3>
          <h4>{trivia.answer}</h4>
        </div>;
      })}
    </div>
  );
}

export default TriviaFavorites;
