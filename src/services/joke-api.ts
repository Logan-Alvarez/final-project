//import axios from 'axios';
import { jokes } from "../models/Joke";
import axios from "axios";
import { ObjectId } from "mongodb";
export function fetchJokes(): Promise<jokes[]> {
  const apiKey = process.env.REACT_APP_JOKE_API_KEY || "";
  return axios
    .get("https://dad-jokes.p.rapidapi.com/random/joke", {
      headers: {
        "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    })
    .then((res) => res.data.body);
}

export function fetchFavoriteJokes(): Promise<jokes[]> {
  return axios
    .get(
      "https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/favjokes"
    )
    .then((res) => res.data);
}

export function postFavoriteJokes(joke: jokes): Promise<jokes> {
  return axios
    .post<jokes>(
      "https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/favjokes",
      joke
    )
    .then((res) => res.data);
}

export function deleteFavoriteJoke(_id: ObjectId): Promise<jokes> {
  return axios
    .delete(
      `https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/favjokes/${_id}`
    )
    .then((res) => res.data);
}
