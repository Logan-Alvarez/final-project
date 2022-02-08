import { useEffect, useState } from "react";
import { getIceBreakers } from "../services/icebreaker-api";
import { IceBreakers } from "../models/Icebreakers";
import { IcebreakerList } from "./IcebreakerList";
import IcebreakerForm from "./IcebreakerForm";

export function Icebreakers() {
  //HOOK
  const [icebreakers, setIcebreaker] = useState<IceBreakers[]>([]);

  //ICEBREAKER useEffect.
  useEffect(() => {
    getIceBreakers().then((data) => setIcebreaker(data));
  }, []);
  // console.log(icebreakers); - RETURNED ARRAY
  function handleIcebreakerSubmit(category: string) {
    let newArray: IceBreakers[] = icebreakers.filter(icebreaker => icebreaker.category === category);
    setIcebreaker(newArray);
  }

  return (
    <div className="Icebreakers">
      <h1>Icebreakers</h1>
      <div>
        <a href="/">Back To Home</a>
      </div>
      <IcebreakerForm onSubmit={handleIcebreakerSubmit} />
      <IcebreakerList icebreakers={icebreakers} />
    </div>
  );
}

//This is the main folder for the icebreakers that loads data when clicked
