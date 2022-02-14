import { jokes } from "../../models/Joke";
import SingleJoke from "../Jokes-Folder/SingleJoke";

interface Prop {
  jokes: jokes[];
}
export function JokesList({ jokes }: Prop) {
  return (
    <div className="JokesList">
      {jokes.map((joke, i) => (
        <SingleJoke key={i} joke={joke} />
      ))}
    </div>
  );
}
