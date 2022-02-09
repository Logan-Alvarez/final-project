import { IceBreakers } from "../../models/Icebreakers";
import { deleteFavIcebreakers } from "../../services/icebreaker-api";

interface Prop {
  icebreakers: IceBreakers[];
}

function IcebreakerFavorites({ icebreakers }: Prop) {
  function removeFavorite() {}
  return (
    <div className="IcebreakerFavorites">
      {icebreakers.map((icebreaker, i) => (
        <div key={i}>
          <h1>{icebreaker.question}</h1>
          <button> - Favorites</button>
        </div>
      ))}
    </div>
  );
}

export default IcebreakerFavorites;
