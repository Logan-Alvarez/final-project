import Data from "../../models/Trivia";
import SingleTrivia from "../Trivia-Folder/SingleTrivia";

interface Prop {
  trivias: Data[];
  color: Boolean;
}

export function TriviaList({ trivias, color }: Prop) {
  return (
    <div className="TriviaList">
      {trivias.map((trivia, i) => (
        <SingleTrivia key={i} trivia={trivia} color={color} />
      ))}
    </div>
  );
}
