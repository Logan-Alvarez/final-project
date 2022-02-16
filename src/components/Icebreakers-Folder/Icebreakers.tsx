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
      <a className="back" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </a>
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
