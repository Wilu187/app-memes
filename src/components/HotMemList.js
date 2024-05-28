import React from "react";
import Mem from "./Mem";

const HotMemList = ({ memes, onVote }) => {
  const hotMemes = memes.filter((meme) => meme.votes >= 5);

  return (
    <div className="mem-list">
      {hotMemes.map((meme) => (
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

export default HotMemList;
