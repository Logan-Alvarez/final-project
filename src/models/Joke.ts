import { ObjectId } from "mongodb";

interface JokeResponse {
  data: jokes[];
}

export interface jokes {
  _id?: ObjectId;
  type: string;
  setup: string;
  punchline: string;
  NSFW: boolean;
}
