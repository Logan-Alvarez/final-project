//import axios from 'axios';
import { jokes } from "../models/Joke";
import axios from "axios";

export function fetchJokes(): Promise<jokes[]> {
  const apiKey = process.env.TRIVIA_API_KEY as string;
  return axios
    .get("https://dad-jokes.p.rapidapi.com/random/joke", {
      headers: {
        "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    })
    .then((res) => res.data.body);
}
