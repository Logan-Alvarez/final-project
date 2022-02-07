// export default interface JokeResponse {
//     data: Data[];
//   };
//   interface Data {
//       body: Body[];
//   }

//   interface Body{
//       _id?: string;
//       type: string;
//       setup: string;
//       punchline: string;
//     }

interface JokeResponse {
  data: jokes[];
}

export interface jokes {
  _id?: string;
  type: string;
  setup: string;
  punchline: string;
}
