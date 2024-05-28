import React, { useState } from "react";
import Mem from "./Mem";
import meme1 from "../assets/meme1.png";
import meme2 from "../assets/meme2.png";
import meme3 from "../assets/meme3.png";
import meme4 from "../assets/meme4.png";
import meme5 from "../assets/meme5.png";

const MemList = () => {
  const [memes, setMemes] = useState([
    {
      id: 1,
      title: "Zakopane",
      img: meme1,
      votes: 0,
    },
    {
      id: 2,
      title: "Kaczor",
      img: meme2,
      votes: 0,
    },
    {
      id: 3,
      title: "Yoda",
      img: meme3,
      votes: 0,
    },
    {
      id: 4,
      title: "Ojciec",
      img: meme4,
      votes: 0,
    },
    {
      id: 5,
      title: "Robert",
      img: meme5,
      votes: 0,
    },
  ]);

  const handleVote = (id, value) => {
    const updatedMemes = memes.map((meme) =>
      meme.id === id ? { ...meme, votes: meme.votes + value } : meme
    );
    setMemes(updatedMemes);
  };

  const regularMemes = memes.filter((meme) => meme.votes < 5);
  const hotMemes = memes.filter((meme) => meme.votes >= 5);

  return (
    <div>
      <h2>Regular Memes</h2>
      <div className="mem-list">
        {regularMemes.map((meme) => (
          <Mem
            key={meme.id}
            title={meme.title}
            img={meme.img}
            votes={meme.votes}
            onVote={(value) => handleVote(meme.id, value)}
          />
        ))}
      </div>
      <h2>Hot Memes</h2>
      <div className="mem-list">
        {hotMemes.map((meme) => (
          <Mem
            key={meme.id}
            title={meme.title}
            img={meme.img}
            votes={meme.votes}
            onVote={(value) => handleVote(meme.id, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemList;
