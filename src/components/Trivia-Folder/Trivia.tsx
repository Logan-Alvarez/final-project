import { useEffect, useState } from "react";
import Data from "../../models/Trivia";
import { fetchTrivia } from "../../services/trivia-api";
import Footer from "../Footer";
import AnswerForm from "./answerFrom";
import TriviaForm from "./TriviaForm";
import { TriviaList } from "./TriviaList";

export function Trivia() {
  //HOOK
  const [trivias, setTrivia] = useState<Data[]>([]);
  const [category, setCategory] = useState<string>("");
  const [color, setColor] = useState<boolean>(false);

  //Game Hooks
  let [chances, setChances] = useState<number>(3);
  let [score, setScore] = useState<number>(0);
  let [highScore, setHighScore] = useState<number>(0);

  useEffect(() => {
    fetchTrivia(category).then((data) => setTrivia(data));
  }, [category]);

  function handleOnSubmit(category: string) {
    setCategory(category);
  }

  function NewQuestion() {
    fetchTrivia(category).then((data) => setTrivia(data));
    setColor(true);
    // theColor isnt being passed as true after new question is clikced.
    // it is staying false.... why
  }

  function handleAnswerSubmit(guess: string) {
    if (trivias[0].answer.toLowerCase() === guess.toLowerCase()) {
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
      <a className="back" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </a>
      <h1 className="triviaTitle">Trivia</h1>
      <TriviaForm onSubmit={handleOnSubmit} />
      <section className="stats">
        <h3>Chances: {chances}</h3>
        <h3>Score: {score}</h3>
        <h3>High Score: {highScore}</h3>
      </section>
      <TriviaList trivias={trivias} color={color} />
      <AnswerForm onSubmit={handleAnswerSubmit} />
      <div className="next-question">
        <button onClick={NewQuestion} className="smallButton">
          Next Question
        </button>
      </div>
      <Footer />
    </div>
  );
}
