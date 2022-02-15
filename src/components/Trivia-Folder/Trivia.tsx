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
      <h1 className="triviaTitle">Trivia</h1>
      <TriviaForm onSubmit={handleOnSubmit} />
      <section className="stats">
        <h3>Chances: {chances}</h3>
        <h3>Score: {score}</h3>
        <h3>High Score: {highScore}</h3>
      </section>
      <TriviaList trivias={trivias} />
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
