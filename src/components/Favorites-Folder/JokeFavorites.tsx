import { jokes } from "../../models/Joke";

interface Prop {
  jokes: jokes[];
}
function JokeFavorites({ jokes }: Prop) {
  return (
    <div className="JokeFavorites">
      {jokes.map((joke, i) => {
        <div key={i}>
          <h3>{joke.setup}</h3>
          <h4>{joke.punchline}</h4>
        </div>;
      })}
    </div>
  );
}

export default JokeFavorites;
