import { useEffect, useState } from "react";
import Data from "../models/Trivia";
import { fetchTrivia } from "../services/trivia-api";
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
      <h1>Trivia</h1>
      <TriviaForm onSubmit={handleOnSubmit} />
      <a href="/">Back To Home</a>
      <TriviaList trivias={trivias} />
      <button onClick={NewQuestion}>Next Question</button>
    </div>
  );
}
