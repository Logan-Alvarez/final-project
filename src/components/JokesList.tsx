import JokeResponse from "../models/Joke";
import SingleJoke from "./SingleJoke";

interface Prop {
  jokes: JokeResponse[];
}
export function JokesList({ jokes }: Prop) {
  return (
    <div>
      <h3>Jokes my guy</h3>
    </div>
  );
}
