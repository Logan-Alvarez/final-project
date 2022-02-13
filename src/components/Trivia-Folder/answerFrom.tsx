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
    <div className="form-contianer">
      <form onSubmit={handleAnswerSubmit} className="answerForm">
        <label htmlFor="answer">Think you know the answer?</label>
        <input
          type="text"
          name="answer"
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit" className="know-it">
          I know it!
        </button>
      </form>
    </div>
  );
}

export default AnswerForm;
