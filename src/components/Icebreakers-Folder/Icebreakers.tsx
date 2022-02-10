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
  //ICEBREAKER useEffect.
  useEffect(() => {
    getIceBreakers().then((data) => setIcebreaker(data));
    getIceBreakers().then((data) => setAllIcebreakers(data));
  }, []);
  // console.log(icebreakers); - RETURNED ARRAY
  function handleIcebreakerSubmit(category: string) {

    if(count === 0){
    let newArray: IceBreakers[] = icebreakers.filter(
      (icebreaker) => icebreaker.category === category
    );
    setIcebreaker(newArray);
    // setIcebreaker(allIcebreakers);
    setCategory(category);
    setCount(1);
    console.log('first test');
    console.log(icebreakers);
    console.log('test');
    console.log(allIcebreakers);
    } else {
      
      setIcebreaker(allIcebreakers);
      console.log(icebreakers);
      console.log('second test');
      setCount(0);
      let newArray: IceBreakers[] = allIcebreakers.filter(icebreaker => icebreaker.category === category);
      console.log(newArray);
    setIcebreaker(newArray);
    setCategory(category);
    }
  }

  return (
    <div className="Icebreakers">
      <div>
        <a className="Home" href="/">
          Back To Home
        </a>
      </div>
      <IcebreakerForm onSubmit={handleIcebreakerSubmit} />
      { category.length > 0 ?
      <IcebreakerList icebreakers={icebreakers}/> :
     <span></span>
}
    </div>
  );
}

//This is the main folder for the icebreakers that loads data when clicked
