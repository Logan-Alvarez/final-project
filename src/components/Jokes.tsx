import { useEffect, useState } from "react";
import JokeResponse from "../models/Joke";

import { fetchJokes } from "../services/joke-api";
import { JokesList } from "./JokesList";

export function Jokes() {
  //HOOKS
  const [jokes, setJoke] = useState<JokeResponse[]>([]);

  //JOKE useEffect.
  useEffect(() => {
    fetchJokes().then((data) => setJoke(data));
  }, []);

  console.log(jokes);
  return (
    <div className="Jokes">
      <h1>Big boy Jokes</h1>
      <JokesList jokes={jokes} />
    </div>
  );
}
