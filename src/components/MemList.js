import React from "react";
import Mem from "./Mem";
import meme1 from "../assets/meme1.png";
import meme2 from "../assets/meme2.png";
import meme3 from "../assets/meme3.png";
import meme4 from "../assets/meme4.png";
import meme5 from "../assets/meme5.png";

const MemList = () => {
  const memes = [
    {
      title: "Zakopane",
      img: meme1,
    },
    {
      title: "Kaczor",
      img: meme2,
    },
    {
      title: "Yoda",
      img: meme3,
    },
    {
      title: "Ojciec",
      img: meme4,
    },
    {
      title: "Robert",
      img: meme5,
    },
  ];

  return (
    <div className="mem-list">
      {memes.map((meme, index) => (
        <Mem key={index} title={meme.title} img={meme.img} />
      ))}
    </div>
  );
};

export default MemList;
