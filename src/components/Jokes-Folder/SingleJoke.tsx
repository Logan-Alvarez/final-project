import { useState } from "react";
import { jokes } from "../../models/Joke";
import { postFavoriteJokes } from "../../services/joke-api";
import Modal from "react-modal";
import React from "react";

interface Prop {
  joke: jokes;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function SingleJoke({ joke }: Prop) {
  const [nsfw, setNsfw] = useState<Boolean>(false);
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function handleFavorite() {
    postFavoriteJokes(joke);
  }
  //Might have to convert NSFW in api to string.
  if (joke.NSFW === true) {
    setNsfw(true);
    setIsOpen(true);
  } 
 

  //ADDED JOKE FILTER BUT HAS NOT BEEN TESTED. MIGHT NEED TO GO IN JOKESLIST
  //ADDED NSFW JOKE MODAL - HAS NOT BEEN TESTED. NEED TO SETNSFW TO TRUE TO TEST.
  return (
    <div>
      {nsfw ? (
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <p>
            This joke has been flagged for NSFW content. Proceed with caution.
          </p>
          <button onClick={closeModal}>I understand</button>
        </Modal>
      ) : (
        <>
          <h1>Single Joke</h1>
          <h3>{joke.setup}</h3>
          <h4>{joke.punchline}</h4>
          <button onClick={handleFavorite} className="smallButton">
            Add To Favorites
          </button>
        </>
      )}
    </div>
  );
}

export default SingleJoke;
