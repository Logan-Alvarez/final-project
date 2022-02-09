import { useState } from "react";
import Data from "../../models/Trivia";

interface Prop {
  trivia: Data;
}

function SingleTrivia({ trivia }: Prop) {
  const [hide, setHide] = useState(false);

  function toggle(){
    if(hide === false){
      setHide(true);
    }else {
      setHide(false);
    }
  }
  return (
    <div>
      <h1>Single Trivia</h1>
      <h3>{trivia.question}</h3>
      {
        hide ?
      <h3 onClick={toggle}>{trivia.answer}</h3>:
      <div onClick={toggle}>Click for Answer</div>
      }
    </div>
  );
}

export default SingleTrivia;
