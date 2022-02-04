
// export default interface JokeResponse {
//   data: Body[];
// };

// // interface Body {
// //     data: Body[];
// // }
// interface Body{
//     _id?: string;
//     type: string;
//     setup: string;
//     punchline: string;
// }



export default interface JokeResponse {
    data: Data[];
  };
  
  interface Data {
      body: Body[];
  }
  interface Body{
      _id?: string;
      type: string;
      setup: string;
      punchline: string;
  }