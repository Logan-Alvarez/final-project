import Data from "../../models/Trivia";
import SingleTrivia from "../Trivia-Folder/SingleTrivia";

interface Prop {
  trivias: Data[];
}

export function TriviaList({ trivias }: Prop) {
  return (
    <div className="TriviaList">
      {trivias.map((trivia, i) => (
        <SingleTrivia key={i} trivia={trivia} />
      ))}
    </div>
  );
}
