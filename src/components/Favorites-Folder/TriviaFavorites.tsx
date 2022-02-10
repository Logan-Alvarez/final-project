import data from "../../models/Trivia";
import { postFavTrivia } from "../../services/trivia-api";
import SingleTrivia from "../Trivia-Folder/SingleTrivia";

interface Prop {
  trivias: data[];
}

function TriviaFavorites({ trivias }: Prop) {
  return (
    <div className="TriviaFavorites">
      {trivias.map((trivia, i) => (
        <div key={i}>
          <h1>{trivia.question}</h1>
          <h4>{trivia.answer}</h4>
        </div>
      ))}
    </div>
  );
}

export default TriviaFavorites;
