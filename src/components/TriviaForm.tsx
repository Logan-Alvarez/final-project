import { FormEvent, useState } from "react";

interface Prop {
  onSubmit: (category: string) => void;
}

function TriviaForm({ onSubmit }: Prop) {
  //Create hook variable to change state of category.
  const [category, setCategory] = useState<string>("");

  //Create a function to do something with the data on form submission.
  function handleFromSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(category);
  }

  return (
    <div className="TriviaForm">
      <form onSubmit={handleFromSubmit}>
        <label htmlFor="category">Filter by category: </label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">General</option>
          <option value="artliterature">Artliterature</option>
          <option value="language">Language</option>
          <option value="sciencenature">Science</option>
          <option value="fooddrink">Food</option>
          <option value="peopleplaces">People</option>
          <option value="geography">Geography</option>
          <option value="historyholidays">Holidays</option>
          <option value="entertainment">Entertainment</option>
          <option value="toysgames">Games</option>
          <option value="music">Music</option>
          <option value="mathematics">Math</option>
          <option value="religionmythology">Religion</option>
          <option value="sports">Sports</option>
        </select>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default TriviaForm;
