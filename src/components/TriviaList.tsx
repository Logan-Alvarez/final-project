import Data from "../models/Trivia";
import SingleTrivia from "./SingleTrivia";

interface Prop {
  trivias: Data[];
}

export function TriviaList({ trivias }: Prop) {
  return (
    <div className="TriviaList">
      <h3>How Smart Are You?</h3>
      {trivias.map((trivia, i) => (
        <SingleTrivia key={i} trivia={trivia} />
      ))}
    </div>
  );
}
