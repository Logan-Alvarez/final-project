import { useEffect, useState } from "react";
import Joke from "../models/Joke";
import { fetchJokes } from "../services/joke-api";

const Main = () => {
    const [joke, setJoke] = useState<Joke[]>([]);

    useEffect(() => {
        fetchJokes().then((data) => setJoke(data));
    }, [])
console.log(joke);
    return (
        <div className="Main">
          
        </div>
    ) 
}

export default Main;