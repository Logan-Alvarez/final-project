import { IceBreakers } from "../../models/Icebreakers";
import { postFavIcebreakers } from "../../services/icebreaker-api";

interface Prop {
  icebreaker: IceBreakers;
  //display: boolean;
}

export function Breaker({ icebreaker}: Prop) {
  function addToFavorites() {
    postFavIcebreakers(icebreaker);
  }

  return (
    <div className="Breaker">  
      <p>Question- {icebreaker.question}</p>
      <button onClick={addToFavorites}>Favorite</button>
    </div>
  );
}
