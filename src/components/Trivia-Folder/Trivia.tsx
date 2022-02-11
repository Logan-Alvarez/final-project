import { useEffect, useState } from "react";
import Data from "../../models/Trivia";
import { fetchTrivia } from "../../services/trivia-api";
import AnswerForm from "./answerFrom";
import TriviaForm from "./TriviaForm";
import { TriviaList } from "./TriviaList";

export function Trivia() {
  //HOOK
  const [trivias, setTrivia] = useState<Data[]>([]);
  const [category, setCategory] = useState<string>("");

  //Game Hooks
  let [chances, setChances] = useState<number>(3);
  let [score, setScore] = useState<number>(0);
  let [highScore, setHighScore] = useState<number>(0);

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

  function handleAnswerSubmit(guess: string) {
    if (trivias[0].answer === guess) {
      setScore((score += 1));
    } else {
      setChances((chances -= 1));
    }
    if (chances === 0) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setChances(3);
    }
  }

  return (
    <div className="Trivia">
      <div>{/* <h1>Trivia</h1> */}</div>
      <TriviaForm onSubmit={handleOnSubmit} />
      <section className="stats">
        <h3>Life: {chances}</h3>
        <h3>Score: {score}</h3>
        <h3>High Score: {highScore}</h3>
      </section>
      <TriviaList trivias={trivias} />
      <a className="Home" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-door-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
        </svg>
      </a>
      <AnswerForm onSubmit={handleAnswerSubmit} />
      <button onClick={NewQuestion} className="smallButton">
        Next Question
      </button>
    </div>
  );
}
