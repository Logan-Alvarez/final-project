import {jokes} from '../models/Joke';
import { postFavoriteJokes } from '../services/joke-api';
import SingleJoke from './SingleJoke';

interface Prop {
    jokes: jokes[];
}
function JokeFavorites({jokes}: Prop) {


    return (
        <div className="JokeFavorites">
            
           { jokes ?
           jokes.map((joke, i)=> {
               <div>
                    <h3>{joke.setup}</h3>
                    <h4>{joke.punchline}</h4>
               </div>
           }) :
           <span>no jokes</span>
           }
        </div>
    )
}

export default JokeFavorites;