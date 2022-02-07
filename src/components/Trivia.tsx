import React, { useEffect, useState } from "react";
import Data from "../models/Trivia";
import { fetchTrivia } from "../services/trivia-api";

export function Trivia() {
  //HOOK
  const [trivia, setTrivia] = useState<Data[]>([]);

  useEffect(() => {
    fetchTrivia().then((data) => setTrivia(data));
  }, []);
  console.log(trivia);
  return (
    <div className="Trivia">
      <h1>Trivia</h1>
      <a href="/">Back To Home</a>
    </div>
  );
}
