import { IceBreakers } from "../../models/Icebreakers";
import { Breaker } from "./Breaker";

interface Prop {
  icebreakers: IceBreakers[];
}

export function IcebreakerList({ icebreakers }: Prop) {
  return (
    <div className="IcebreakerList">
      <h1>Results</h1>
      {icebreakers.map((icebreaker, i) => (
        <Breaker key={i} icebreaker={icebreaker} />
      ))}
    </div>
  );
}
