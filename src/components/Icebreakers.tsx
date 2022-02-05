import { useEffect, useState } from "react";
import { getIceBreakers } from "../services/icebreaker-api";
import { IceBreakers } from "../models/Icebreakers";

export function IceBreakers() {
  //HOOK
  const [icebreaker, setIcebreaker] = useState<IceBreakers[]>([]);

  //ICEBREAKER useEffect.
  useEffect(() => {
    getIceBreakers().then((data) => setIcebreaker(data));
  }, []);
  //console.log(icebreaker); - RETURNED ARRAY

  return (
    <div>
      <h1>Icebreakers</h1>
    </div>
  );
}
