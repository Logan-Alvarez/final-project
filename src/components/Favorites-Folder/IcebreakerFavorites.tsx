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
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
            {/* <button className="smallButton">- Favorites</button> */}
          </form>
        </div>
      ))}
    </div>
  );
}

export default IcebreakerFavorites;
