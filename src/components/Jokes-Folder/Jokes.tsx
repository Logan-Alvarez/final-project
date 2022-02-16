import { useEffect, useState } from "react";
import { jokes } from "../../models/Joke";
import { fetchJokes } from "../../services/joke-api";
import Footer from "../Footer";
import { JokesList } from "./JokesList";

export function Jokes() {
  //HOOKS
  const [jokes, setJoke] = useState<jokes[]>([]);

  //JOKE;
  useEffect(() => {
    fetchJokes().then((data) => setJoke(data));
  }, []);

  function newJoke() {
    fetchJokes().then((data) => setJoke(data));
  }

  console.log(jokes);
  return (
    <div className="Jokes">
      <a className="back" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </a>
      <h1 className="joke-title">Jokes</h1>
      <JokesList jokes={jokes} />
      <button onClick={newJoke} className="smallButton">
        Next
      </button>
      <Footer />
    </div>
  );
}
