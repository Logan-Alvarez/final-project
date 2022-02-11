import { useState } from "react";
import Data from "../../models/Trivia";
import { postFavTrivia } from "../../services/trivia-api";

interface Prop {
  trivia: Data;
}

function SingleTrivia({ trivia }: Prop) {
  const [hide, setHide] = useState(false);

  function toggle() {
    if (hide === false) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  function addToFavorites() {
    postFavTrivia(trivia);
  }

  return (
    <div>
      <h1>Single Trivia</h1>
      <h3>{trivia.question}</h3>
      {hide ? (
        <h3 onClick={toggle}>{trivia.answer}</h3>
      ) : (
        <div onClick={toggle}>Click for Answer</div>
      )}
      <button className="smallButton" onClick={addToFavorites}>
        + Favorties
      </button>
    </div>
  );
}

export default SingleTrivia;
