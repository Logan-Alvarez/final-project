import { useEffect, useState } from "react";
import { jokes } from "../../models/Joke";
import { fetchJokes } from "../../services/joke-api";
import { JokesList } from "./JokesList";

export function Jokes() {
  //HOOKS
  const [jokes, setJoke] = useState<jokes[]>([]);

  // JOKE

  useEffect(() => {
    fetchJokes().then((data) => setJoke(data));
  }, []);

  function newJoke() {
    fetchJokes().then((data) => setJoke(data));
  }

  console.log(jokes);
  return (
    <div className="Jokes">
      <h1>Super Funny Jokes</h1>
      <JokesList jokes={jokes} />
      <button onClick={newJoke} className="smallButton">
        Next
      </button>
    </div>
  );
}
