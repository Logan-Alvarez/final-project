import { useEffect, useState } from "react";
import { jokes } from "../models/Joke";
import { fetchFavoriteJokes } from "../services/joke-api";
import IcebreakerFavorites from "./IcebreakerFavorites";
import FavoritesList from "./IcebreakerFavorites";
import JokeFavorites from "./JokeFavorites";
import TriviaFavorites from "./TriviaFavorites";

function Favorites(){
    const [icebreakers, setIcebreakers] = useState([]);
    const [jokes, setJokes] = useState<jokes[]>([]);
    const [trivia, setTrivia] = useState([]);

    useEffect(() => {
        fetchFavoriteJokes().then((data) => setJokes(data));
        //getFavIcebreakers().then((data) => setIcebreakers(data));
        //fetchFavoriteTrivia().then((data) => setTrivia(data));
    }, [])

    return (
        <div className="Favorites">
            <h1>Favorites</h1>
            <div className="favoritesContainer">
                <IcebreakerFavorites />
                <JokeFavorites jokes={jokes}/>
                <TriviaFavorites />
            </div>
        </div>
    )
}

export default Favorites;