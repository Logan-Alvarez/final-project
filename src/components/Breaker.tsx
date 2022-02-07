import { IceBreakers } from "../models/Icebreakers";

interface Prop {
  icebreaker: IceBreakers;
}

export function Breaker({ icebreaker }: Prop) {
  return (
    <div className="Breaker">
      <h3>Category- {icebreaker.category}</h3>
      <p>Question- {icebreaker.question}</p>
      <button> + Favorites</button>
    </div>
  );
}
