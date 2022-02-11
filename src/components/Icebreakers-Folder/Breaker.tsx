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
      <h3>Category- {icebreaker.category}</h3>
      <p>{icebreaker.question}</p>
      <button className="smallButton" onClick={addToFavorites}>
        Add To Favorites
      </button>
    </div>
  );
}
