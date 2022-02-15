import { useEffect, useState } from "react";
import { getIceBreakers } from "../../services/icebreaker-api";
import { IceBreakers } from "../../models/Icebreakers";
import { IcebreakerList } from "./IcebreakerList";
import IcebreakerForm from "./IcebreakerForm";
import Footer from "../Footer";

export function Icebreakers() {
  //HOOK
  const [icebreakers, setIcebreaker] = useState<IceBreakers[]>([]);
  const [allIcebreakers, setAllIcebreakers] = useState<IceBreakers[]>([]);
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);
  const [filterFirst, setFilterFirst] = useState(true);

  let scrollBtn = document.getElementById("scrollTop") as HTMLElement;
  window.onscroll = function () {
    scrollFunction();
  };

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
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  return (
    <div className="Icebreakers">
      <span id="icebreakerTitle">Icebreakers</span>
      <IcebreakerForm onSubmit={handleIcebreakerSubmit} />
      {category.length > 0 ? (
        <IcebreakerList icebreakers={icebreakers} />
      ) : (
        <span></span>
      )}
      <button onClick={topFunction} id="scrollTop">
        <i className="bi bi-arrow-up-circle-fill"></i>
      </button>
      <Footer />
    </div>
  );
}

//This is the main folder for the icebreakers that loads data when clicked
