import { FormEvent, useState } from "react";
import { IceBreakers } from "../models/Icebreakers";

interface Props {
    onSubmit: (category: string) => void;
}

function IcebreakerForm({onSubmit}: Props) {
    const [category, setCategory] = useState("");


    function handleFormSubmit(e:FormEvent){
        e.preventDefault();
        console.log(category)
        onSubmit(category);
    }

    return (
        <div className="IcebreakerForm">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="categorySearch">Search by category</label>
                <input type="text" id="categorySearch" onChange={e => setCategory(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default IcebreakerForm;