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
                <label htmlFor="category">Search by Category</label>
               <select name="category" id="category" onChange={e => setCategory(e.target.value)}>
                   <option value="">Select a Category</option>
                   <option value="Funny">Funny</option>
                   <option value="Travel">Travel</option>
                   <option value="Animal">Animal</option>
                   <option value="Food">Food</option>
                   <option value="Hobby">Hobby</option>
                   <option value="Have You Ever...?">Have You Ever...</option>
                   <option value="Technology">Technology</option>
                   <option value="Sci-Fi &amp; Entertainment">Sci-Fi &amp; Entertainment</option>
                   <option value="Reflective">Reflective</option> 
                   <option value="Work">Work</option>
               </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default IcebreakerForm;