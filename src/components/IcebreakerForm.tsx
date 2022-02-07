import e from "express";
import { FormEvent, useState } from "react";
import { IceBreakers } from "../models/Icebreakers";

interface Props {
    onSubmit: (category: string) => void;
}

function IcebreakerForm({onSubmit}: Props) {
    const [category, setCategory] = useState("");


    function handleFormSubmit(e:FormEvent){
        e.preventDefault();
        onSubmit(category);
        setCategory("");
    }

    return (
        <div className="IcebreakerForm">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="category">Search by category</label>
               <select name="category" id="category" onChange={e => setCategory(e.target.value)}>
                   <option value="funny">Funny</option>
                   <option value="travel">Travel</option>
                   <option value="animal">Animal</option>
                   <option value="food">Food</option>
                   <option value="hobby">Hobby</option>
                   <option value="haveYou">Have You Ever...</option>
                   <option value="technology">Technology</option>
                   <option value="scifi">Sci-Fi &amp; Entertainment</option>
                   <option value="reflective">Reflective</option> 
                   <option value="work">Work</option>
               </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default IcebreakerForm;