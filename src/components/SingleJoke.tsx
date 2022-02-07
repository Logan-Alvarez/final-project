import JokeResponse from "../models/Joke";

interface Prop {
  joke: JokeResponse;
}

function SingleJoke({ joke }: Prop) {
  return (
    <div>
      <h1>Single Joke</h1>
    </div>
  );
}

export default SingleJoke;
