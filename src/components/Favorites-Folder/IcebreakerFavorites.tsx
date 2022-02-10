import { ObjectId } from "mongodb";
import { FormEvent } from "react";
import { IceBreakers } from "../../models/Icebreakers";
import { deleteFavIcebreakers } from "../../services/icebreaker-api";

interface Prop {
  icebreakers: IceBreakers[];
  onSubmit: (index: number) => void;
}

function IcebreakerFavorites({ icebreakers, onSubmit }: Prop) {
  function removeFavorite(index: number, e: FormEvent) {
    e.preventDefault();
    let foundId = icebreakers[index]._id as ObjectId;
    deleteFavIcebreakers(foundId);
    onSubmit(index);
  }
  return (
    <div>
      {icebreakers.map((icebreaker, i) => (
        <div className="IcebreakerFavorites" key={i}>
          <h1>{icebreaker.question}</h1>
          <form onSubmit={(e) => removeFavorite(i, e)}>
            <button className="smallButton">- Favorites</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default IcebreakerFavorites;
