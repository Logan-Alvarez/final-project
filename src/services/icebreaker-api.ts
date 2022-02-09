import axios from "axios";
import { ObjectId } from "mongodb";
import { IceBreakers } from "../models/Icebreakers";

export function getIceBreakers(): Promise<IceBreakers[]> {
  return axios
    .get(
      "http://localhost:5001/final-project-backend-fbdd5/us-central1/api/icebreakers"
    )
    .then((res) => res.data);
}

export function getFavIcebreakers(): Promise<IceBreakers[]> {
  return axios
    .get(
      "http://localhost:5001/final-project-backend-fbdd5/us-central1/api/favicebreakers"
    )
    .then((res) => res.data);
}

export function postFavIcebreakers(
  iceBreaker: IceBreakers
): Promise<IceBreakers> {
  return axios
    .post<IceBreakers>(
      "http://localhost:5001/final-project-backend-fbdd5/us-central1/api/favicebreakers",
      iceBreaker
    )
    .then((res) => res.data);
}

export function deleteFavIcebreakers(_id: ObjectId): Promise<IceBreakers> {
  return axios
    .delete(
      `http://localhost:5001/final-project-backend-fbdd5/us-central1/api/favicebreakers/${_id}`
    )
    .then((res) => res.data);
}
