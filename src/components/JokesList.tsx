import { jokes } from "../models/Joke";
import SingleJoke from "./SingleJoke";

interface Prop {
  jokes: jokes[];
}
export function JokesList({ jokes }: Prop) {
  return (
    <div>
      <h3>Jokes my guy</h3>
      {jokes.map((joke, i) => (
        <SingleJoke key={i} joke={joke} />
      ))}
    </div>
  );
}
