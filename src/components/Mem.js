import React from "react";

const Mem = ({ title, img, votes, onVote }) => {
  return (
    <div className="mem">
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <div className="votes">
        <button onClick={() => onVote(1)}>+</button>
        <span>{votes}</span>
        <button onClick={() => onVote(-1)}>-</button>
      </div>
    </div>
  );
};

export default Mem;
