import { IceBreakers } from "../models/Icebreakers";

interface Prop {
  icebreaker: IceBreakers;
}

export function Breaker({ icebreaker }: Prop) {
  return (
    <div className="Breaker">
      <h3>{icebreaker.category}</h3>
      <p>{icebreaker.question}</p>
    </div>
  );
}
