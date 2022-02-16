import axios from "axios";
import Data from "../models/Trivia";
import { ObjectId } from "mongodb";
import Trivia from "../models/Trivia";

export function fetchTrivia(category: string): Promise<Trivia[]> {
  const apiKey = process.env.REACT_APP_TRIVIA_API_KEY as string;
  return axios
    .get("https://api.api-ninjas.com/v1/trivia?category=" + category, {
      headers: {
        "X-Api-Key": apiKey,
      },
    })
    .then((res) => res.data);
}

export function getFavTrivia(): Promise<Trivia[]> {
  return axios
    .get(
      "https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/favtrivia"
    )
    .then((res) => res.data);
}

export function postFavTrivia(favtrivia: Trivia): Promise<Trivia> {
  return axios
    .post(
      "https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/favtrivia",
      favtrivia
    )
    .then((res) => res.data);
}

export function deleteFavTrivia(_id: ObjectId): Promise<Trivia> {
  return axios
    .delete(
      `https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/favtrivia/${_id}`
    )
    .then((res) => res.data);
}
