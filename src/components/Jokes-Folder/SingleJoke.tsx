import { useEffect, useState } from "react";
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
  const [nsfw, setNsfw] = useState<Boolean>(true);
  const [modalIsOpen, setIsOpen] = useState(true);
  const [add, setAdd] = useState<Boolean>(false);

  useEffect(() => {
    if (add) {
      setAdd(false);
    }
  }, [joke]);

  function closeModal() {
    setIsOpen(false);
    setNsfw(false);
  }

  function handleFavorite() {
    postFavoriteJokes(joke);
    setAdd(true);
  }

  if (joke.NSFW === true) {
    setNsfw(true);
    setIsOpen(true);
  }

  return (
    <div className="SingleJoke">
      {nsfw ? (
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <p>These jokes may contain adult content.</p>
          <div className="modal-div">
            <button onClick={closeModal} className="modal-btn">
              I understand
            </button>
          </div>
        </Modal>
      ) : (
        <>
          <div className="joke-setup">
            <h2>Setup</h2>
            <h3>{joke.setup}</h3>
          </div>
          <div className="joke-punchline">
            <h2>Punchline</h2>
            <h3>{joke.punchline}</h3>
          </div>
          {add ? (
            <button className="favorite-btn">
              <i className="heart-yellow bi-heart-fill"></i>
            </button>
          ) : (
            <button className="favorite-btn" onClick={handleFavorite}>
              <i className="heart bi-heart-fill"></i>
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default SingleJoke;
