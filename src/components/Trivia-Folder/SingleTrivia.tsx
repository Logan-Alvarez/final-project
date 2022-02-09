import Data from "../../models/Trivia";

interface Prop {
  trivia: Data;
}

function SingleTrivia({ trivia }: Prop) {
  return (
    <div>
      <h1>Single Trivia</h1>
      <h3>{trivia.category}</h3>
      <h3>{trivia.question}</h3>
      <h3>{trivia.answer}</h3>
    </div>
  );
}

export default SingleTrivia;
