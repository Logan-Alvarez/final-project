import { jokes } from "../../models/Joke";
import SingleJoke from "../Jokes-Folder/SingleJoke";

interface Prop {
  jokes: jokes[];
}
export function JokesList({ jokes }: Prop) {
  return (
    <div>
      <a className="Home" href="/">
        Back To Home
      </a>
      {jokes.map((joke, i) => (
        <SingleJoke key={i} joke={joke} />
      ))}
    </div>
  );
}
