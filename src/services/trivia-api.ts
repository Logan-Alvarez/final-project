import axios from "axios";
import Data from "../models/Trivia";
import { ObjectId } from "mongodb";
import Trivia from "../models/Trivia";

export function fetchTrivia(category: string): Promise<Trivia[]> {
  //const apiKey = process.env.TRIVIA_API_KEY as string;
  return axios
    .get("https://api.api-ninjas.com/v1/trivia?category=" + category, {
      headers: {
        "X-Api-Key": "k0oavaV3QHHSU6dHS42jPw==brteR2986ZEA5ZGN",
      },
    })
    .then((res) => res.data);
}

export function getFavTrivia(): Promise<Trivia[]> {
  return axios
    .get(
      "http://localhost:5001/final-project-backend-fbdd5/us-central1/api/favtrivia"
    )
    .then((res) => res.data);
}

export function postFavTrivia(favtrivia: Trivia): Promise<Trivia> {
  return axios
    .post(
      "http://localhost:5001/final-project-backend-fbdd5/us-central1/api/favtrivia",
      favtrivia
    )
    .then((res) => res.data);
}

export function deleteFavTrivia(_id: ObjectId): Promise<Trivia> {
  return axios
    .delete(
      `http://localhost:5001/final-project-backend-fbdd5/us-central1/api/favtrivia/${_id}`
    )
    .then((res) => res.data);
}

