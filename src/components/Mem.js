import React from "react";

const Mem = ({ title, img }) => {
  return (
    <div className="mem">
      <h2>{title}</h2>
      <img src={img} alt={title} />
    </div>
  );
};

export default Mem;
