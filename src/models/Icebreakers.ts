import { ObjectId } from "mongodb";

//MONGODB CREATES ID WHEN OBJECT IS ADDED TO DATABASE.
export interface IceBreakers {
  _id?: ObjectId;
  category: string;
  question: string;
}
