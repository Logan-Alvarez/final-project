//import axios from 'axios';
import { jokes } from "../models/Joke";
import axios from "axios";
export function fetchJokes(): Promise<jokes[]> {
  //const apiKey = process.env.TRIVIA_API_KEY as string;
  return axios
    .get("https://dad-jokes.p.rapidapi.com/random/joke", {
      headers: {
        "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        "x-rapidapi-key": "9df1725049msh095042c0e3995c9p1e028ajsn08b2d900b2b8",
      },
    })
    .then((res) => res.data.body);
}

export function fetchFavoriteJokes(): Promise<jokes[]> {
    
    return axios
      .get("http://localhost:5001/final-project-backend-fbdd5/us-central1/api/favorites")
      .then((res) => res.data.body);
}

export function postFavoriteJokes(joke: jokes): Promise<jokes> {
    return axios
    .post<jokes>("http://localhost:5001/final-project-backend-fbdd5/us-central1/api/favorites", joke)
    .then((res) => res.data);
}