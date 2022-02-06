import { useEffect, useState } from "react";
import { getIceBreakers } from "../services/icebreaker-api";
import { IceBreakers } from "../models/Icebreakers";
import { IcebreakerList } from "./IcebreakerList";

export function Icebreakers() {
  //HOOK
  const [icebreakers, setIcebreaker] = useState<IceBreakers[]>([]);

  //ICEBREAKER useEffect.
  useEffect(() => {
    getIceBreakers().then((data) => setIcebreaker(data));
  }, []);
  // console.log(icebreakers); - RETURNED ARRAY

  return (
    <div className="Icebreakers">
      <h1>Icebreakers</h1>
      <IcebreakerList icebreakers={icebreakers} />
    </div>
  );
}
