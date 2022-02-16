import axios from "axios";
import { ObjectId } from "mongodb";
import { IceBreakers } from "../models/Icebreakers";

export function getIceBreakers(): Promise<IceBreakers[]> {
  return axios
    .get(
      "https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/icebreakers"
    )
    .then((res) => res.data);
}

export function getFavIcebreakers(): Promise<IceBreakers[]> {
  return axios
    .get(
      "https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/favicebreakers"
    )
    .then((res) => res.data);
}

export function postFavIcebreakers(
  iceBreaker: IceBreakers
): Promise<IceBreakers> {
  return axios
    .post<IceBreakers>(
      "https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/favicebreakers",
      iceBreaker
    )
    .then((res) => res.data);
}

export function deleteFavIcebreakers(_id: ObjectId): Promise<IceBreakers> {
  return axios
    .delete(
      `https://us-central1-final-project-backend-fbdd5.cloudfunctions.net/api/favicebreakers/${_id}`
    )
    .then((res) => res.data);
}
