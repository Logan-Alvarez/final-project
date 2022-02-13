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
    <div className="favIcebreaker-Container">
      {icebreakers.map((icebreaker, i) => (
        <div className="IcebreakerFavorites" key={i}>
          <h2>{icebreaker.question}</h2>
          <form onSubmit={(e) => removeFavorite(i, e)}>
            <button className="delete-btn">
              <i className="bi bi-trash-fill"></i>
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default IcebreakerFavorites;
