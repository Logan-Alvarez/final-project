import { ObjectId } from "mongodb";

interface JokeResponse {
  data: jokes[];
}

export interface jokes {
  _id?: string;
  type: string;
  setup: string;
  punchline: string;
}
