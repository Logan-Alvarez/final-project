import { ObjectId } from "mongodb";
import { IceBreakers } from "../../models/Icebreakers";
import { deleteFavIcebreakers } from "../../services/icebreaker-api";

interface Prop {
  icebreakers: IceBreakers[];
}

function IcebreakerFavorites({ icebreakers }: Prop) {
  function removeFavorite(index: number) {
    let foundId = icebreakers[index]._id as ObjectId;
    deleteFavIcebreakers(foundId);
  }
  return (
    <div className="IcebreakerFavorites">
      {icebreakers.map((icebreaker, i) => (
        <div key={i}>
          <h1>{icebreaker.question}</h1>
          <button onClick={(e) => removeFavorite(i)}> - Favorites</button>
        </div>
      ))}
    </div>
  );
}
export default IcebreakerFavorites;
