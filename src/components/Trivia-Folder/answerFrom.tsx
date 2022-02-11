import { FormEvent, useState } from "react";

interface Prop {
  onSubmit: (guess: string) => void;
}

function AnswerForm({ onSubmit }: Prop) {
  const [answer, setAnswer] = useState<string>("");

  function handleAnswerSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(answer);
    setAnswer("");
  }
  return (
    <div className="answerFrom">
      <form onSubmit={handleAnswerSubmit}>
        <label htmlFor="answer">Think you know the answer?</label>
        <input
          type="text"
          name="answer"
          id="answer"
          placeholder="Feeling lucky?"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">I know it!</button>
      </form>
      <h1>{answer}</h1>
    </div>
  );
}

export default AnswerForm;
