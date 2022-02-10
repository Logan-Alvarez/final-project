import { jokes } from "../../models/Joke";
import { postFavoriteJokes } from "../../services/joke-api";
import SingleJoke from "../Jokes-Folder/SingleJoke";

interface Prop {
  jokes: jokes[];
}
function JokeFavorites({ jokes }: Prop) {
  return (
    <div className="JokeFavorites">
      
      <div>
      {jokes.map((joke, i) => {
        <div>
          {console.log(joke.setup)}
          <h3>{joke.setup}</h3>
          <h4>{joke.punchline}</h4>
        </div>;
      })}
      </div>
    </div>
  );
}

export default JokeFavorites;
