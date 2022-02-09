import { IceBreakers } from "../models/Icebreakers";

interface Prop {
  icebreakers: IceBreakers[];
}

function IcebreakerFavorites({ icebreakers }: Prop) {
  return (
    <div className="IcebreakerFavorites">
      {icebreakers.map((icebreaker, i) => (
        <div key={i}>
          <h1>{icebreaker.question}</h1>
        </div>
      ))}
    </div>
  );
}

export default IcebreakerFavorites;
