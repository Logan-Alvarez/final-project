import { useEffect, useState } from "react";
import { IceBreakers } from "../models/Icebreakers";
import Joke from "../models/Joke";
import { getIceBreakers } from "../services/icebreaker-api";
import { fetchJokes } from "../services/joke-api";

const Main = () => {
  //HOOKS
  const [joke, setJoke] = useState<Joke[]>([]);
  const [icebreaker, setIcebreaker] = useState<IceBreakers[]>([]);

  //JOKE useEffect.
  useEffect(() => {
    fetchJokes().then((data) => setJoke(data));
  }, []);

  //ICEBREAKER useEffect.
  useEffect(() => {
    getIceBreakers().then((data) => setIcebreaker(data));
  }, []);
  //console.log(icebreaker); - RETURNED ARRAY

  console.log(joke);
  return (
    <div className="Main">
      <header>
        <h1>Logo</h1>
      </header>
      <div>
        <ul className="main-navigation">
          <li>Trivia</li>
          <li>IceBreakers</li>
          <li>Jokes</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
