import { useEffect, useState } from "react";
import Data from "../../models/Trivia";
import { fetchTrivia } from "../../models/trivia-api";
import TriviaForm from "./TriviaForm";
import { TriviaList } from "./TriviaList";

export function Trivia() {
  //HOOK
  const [trivias, setTrivia] = useState<Data[]>([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    fetchTrivia(category).then((data) => setTrivia(data));
  }, [category]);
  //console.log(trivia);

  function handleOnSubmit(category: string) {
    setCategory(category);
  }

  function NewQuestion() {
    fetchTrivia(category).then((data) => setTrivia(data));
  }

  return (
    <div className="Trivia">
      <div>
        <h1>Trivia</h1>
        <a href="/">Back To Home</a>
      </div>
      <TriviaForm onSubmit={handleOnSubmit} />
      
      <TriviaList trivias={trivias} />
      <button onClick={NewQuestion}>Next Question</button>
    </div>
  );
}
