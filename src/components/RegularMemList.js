import React from "react";
import Mem from "./Mem";

const RegularMemList = ({ memes, onVote }) => {
  const regularMemes = memes.filter((meme) => meme.votes < 5);

  return (
    <div className="mem-list">
      {regularMemes.map((meme) => (
        <Mem
          key={meme.id}
          title={meme.title}
          img={meme.img}
          votes={meme.votes}
          onVote={(value) => onVote(meme.id, value)}
        />
      ))}
    </div>
  );
};

export default RegularMemList;
