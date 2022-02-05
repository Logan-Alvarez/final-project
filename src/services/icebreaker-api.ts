import axios from "axios";
import { IceBreakers } from "../models/Icebreakers";

export function getIceBreakers(): Promise<IceBreakers[]> {
  return axios
    .get(
      "http://localhost:5001/final-project-backend-fbdd5/us-central1/api/icebreakers"
    )
    .then((res) => res.data);
}
