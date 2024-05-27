import React, { useState } from "react";

const Mem = ({ title, img }) => {
  const [votes, setVotes] = useState(0);

  const handleVote = (value) => {
    setVotes((prevVotes) => prevVotes + value);
  };

  return (
    <div className="mem">
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <div>
        <button onClick={() => handleVote(1)}>+</button>
        <span>{votes}</span>
        <button onClick={() => handleVote(-1)}>-</button>
      </div>
    </div>
  );
};

export default Mem;
