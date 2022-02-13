import { ObjectId } from "mongodb";
import { useState } from "react";
import { IceBreakers } from "../../models/Icebreakers";
import {
  deleteFavIcebreakers,
  postFavIcebreakers,
} from "../../services/icebreaker-api";

interface Prop {
  icebreaker: IceBreakers;
  //display: boolean;
}

export function Breaker({ icebreaker }: Prop) {
  const [add, setAdd] = useState<Boolean>(false);
  function addToFavorites() {
    postFavIcebreakers(icebreaker);
    setAdd(true);
  }

  return (
    <div className="Breaker">
      <p>{icebreaker.question}</p>
      {add ? (
        <button className="smallButton"> Added</button>
      ) : (
        <button className="smallButton" onClick={addToFavorites}>
          + favorites
        </button>
      )}
    </div>
  );
}
