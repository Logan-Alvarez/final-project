import { useState } from "react";
import Data from "../../models/Trivia";
import { postFavTrivia } from "../../services/trivia-api";

interface Prop {
  trivia: Data;
  color: Boolean;
}

function SingleTrivia({ trivia, color }: Prop) {
  const [hide, setHide] = useState(false);
  const [colors, setColors] = useState(false);
  const [showYellow, setShowYellow] = useState(false);
  const [count, setCount] = useState(0);
 // let showYellow: Boolean = false;
  // if(count %2 === 1 ){
  //   color = false;
  // }
 //if next question is clicked and blank heart is clicked
 // make heart yellow- once clicked color stays true
//  if(count%2 === 0){
if(color === true && colors === true){

  setColors(false);
  color = false;
}
 

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
    setColors(true);
    setCount(count+1);
  }

  function removeYellow(){
    setColors(false);
   
  }

  return (
    <div className="singleTrivia">
      <h1>
        Question{" "}
        {colors ? (
          <button className="favorite-btn" onClick={removeYellow}>
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
        <div onClick={toggle}>Click for Answer</div>
      )}
    </div>
  );
}

export default SingleTrivia;
