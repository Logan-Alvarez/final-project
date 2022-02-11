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
    <div className="singleTrivia">
      <h1>Trivia Question:</h1>
      <h3 className="triviaA">{trivia.question}</h3>
      {hide ? (
        <h3 className="triviaA" onClick={toggle}>
          {trivia.answer}
        </h3>
      ) : (
        <div onClick={toggle}>Click for Answer</div>
      )}
      <button className="smallButton" onClick={addToFavorites}>
        Add To Favorites
      </button>
    </div>
  );
}

export default SingleTrivia;
