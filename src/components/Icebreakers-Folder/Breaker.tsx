import { IceBreakers } from "../../models/Icebreakers";
import { postFavIcebreakers } from "../../services/icebreaker-api";

interface Prop {
  icebreaker: IceBreakers;
}

export function Breaker({ icebreaker }: Prop) {
  function addToFavorites() {
    postFavIcebreakers(icebreaker);
  }

  return (
    <div className="Breaker">
      <h3>Category- {icebreaker.category}</h3>
      <p>Question- {icebreaker.question}</p>
      <button onClick={addToFavorites}> + Favorites</button>
    </div>
  );
}
