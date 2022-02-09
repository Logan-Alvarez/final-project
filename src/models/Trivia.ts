import { ObjectId } from "mongodb";

export default interface Data {
  _id?: ObjectId;
  category: string;
  question: string;
  answer: string;
}
