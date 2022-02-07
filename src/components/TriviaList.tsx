import Data from "../models/Trivia";

interface Prop {
  trivia: Data[];
}

export function TriviaList({ trivia }: Prop) {
  return <div className="TriviaList"></div>;
}
