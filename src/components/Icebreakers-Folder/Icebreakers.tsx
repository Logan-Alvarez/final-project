import { useEffect, useState } from "react";
import { getIceBreakers } from "../../services/icebreaker-api";
import { IceBreakers } from "../../models/Icebreakers";
import { IcebreakerList } from "./IcebreakerList";
import IcebreakerForm from "./IcebreakerForm";

export function Icebreakers() {
  //HOOK
  const [icebreakers, setIcebreaker] = useState<IceBreakers[]>([]);
  const [allIcebreakers, setAllIcebreakers] = useState<IceBreakers[]>([]);
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);
  const [filterFirst, setFilterFirst] = useState(true);
  
  let scrollBtn = document.getElementById('scrollTop') as HTMLElement;
  window.onscroll = function(){scrollFunction()};

  //ICEBREAKER useEffect.
  useEffect(() => {
    getIceBreakers().then((data) => setIcebreaker(data));
    getIceBreakers().then((data) => setAllIcebreakers(data));
  }, []);
  // console.log(icebreakers); - RETURNED ARRAY
  function handleIcebreakerSubmit(category: string) {
    if (count === 0) {
      let icebreakerArray = allIcebreakers;
      let newArray: IceBreakers[] = icebreakerArray.filter(
        (icebreaker) => icebreaker.category === category
      );
      setIcebreaker(newArray);
      setCategory(category);
      setCount(1);
    } else {
      let icebreakerArray = allIcebreakers;
      setCount(0);
      let newArray: IceBreakers[] = icebreakerArray.filter(
        (icebreaker) => icebreaker.category === category
      );

      setIcebreaker(newArray);
      setCategory(category);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  }

  return (
    <div className="Icebreakers">
      <div>
        <a className="Home" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
          </svg>
        </a>
      </div>
      <IcebreakerForm onSubmit={handleIcebreakerSubmit} />
      {category.length > 0 ? (
        <IcebreakerList icebreakers={icebreakers} />
      ) : (
        <span></span>
      )}
      <button onClick={topFunction} id="scrollTop">Top</button>
    </div>
  );
}

//This is the main folder for the icebreakers that loads data when clicked
