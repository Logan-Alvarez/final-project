import { useState } from "react";

function Favorites(){
    const [icebreakers, setIcebreakers] = useState([]);
    const [jokes, setJokes] = useState([]);
    const [trivia, setTrivia] = useState([]);
    
    return (
        <div className="Favorites">
            <h1>Favorites</h1>

        </div>
    )
}

export default Favorites;