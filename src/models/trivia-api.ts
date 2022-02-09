import axios from "axios";
import Data from "./Trivia";
import Trivia from "./Trivia";

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

// export function fetchFavoriteTrivia(): Promise<Data[]> {
//   return axios.get();
// }
