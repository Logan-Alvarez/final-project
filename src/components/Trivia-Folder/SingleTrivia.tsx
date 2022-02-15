import { useEffect, useState } from "react";
import Data from "../../models/Trivia";
import { postFavTrivia } from "../../services/trivia-api";

interface Prop {
  trivia: Data;
  color: boolean;
}

function SingleTrivia({ trivia, color }: Prop) {
  const [hide, setHide] = useState(false);
  const [add, setAdd] = useState<boolean>(color);
  const [alwaysFalse, setAlwaysFalse] = useState<boolean>(false);

  useEffect(() => {
    if (add) {
      setAdd(false);
    }
    if (hide) {
      setHide(false);
    }
  }, [trivia]);

  function toggle() {
    if (hide === false) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  function addToFavorites() {
    // change heart to yellow
    postFavTrivia(trivia);
    setAdd(true);
  }

  return (
    <div className="singleTrivia">
      <h1>
        Question{" "}
        {add ? (
          <button className="favorite-btn">
            <i className="heart-yellow bi-heart-fill"></i>
          </button>
        ) : (
          <button className="favorite-btn" onClick={addToFavorites}>
            <i className="heart bi-heart-fill"></i>
          </button>
        )}
      </h1>
      <h3 className="triviaA">{trivia.question}</h3>
      {hide ? (
        <h3 className="triviaA" onClick={toggle}>
          {trivia.answer}
        </h3>
      ) : (
        <button onClick={toggle}>Click for Answer</button>
      )}
    </div>
  );
}

export default SingleTrivia;
