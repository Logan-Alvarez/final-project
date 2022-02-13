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
        <button className="favorite-btn">
          <i className="heart-yellow bi-heart-fill"></i>
        </button>
      ) : (
        <button className="favorite-btn" onClick={addToFavorites}>
          <i className="heart bi-heart-fill"></i>
        </button>
      )}
    </div>
  );
}
