import { jokes } from "../models/Joke";

interface Prop {
  joke: jokes;
}

function SingleJoke({ joke }: Prop) {
  return (
    <div>
      <h1>Single Joke</h1>
      <h3>{joke.setup}</h3>
      <h4>{joke.punchline}</h4>
    </div>
  );
}

export default SingleJoke;
