import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegularMemList from "./components/RegularMemList";
import HotMemList from "./components/HotMemList";
import "./App.css";
import meme1 from "./assets/meme1.png";
import meme2 from "./assets/meme2.png";
import meme3 from "./assets/meme3.png";
import meme4 from "./assets/meme4.png";
import meme5 from "./assets/meme5.png";

const App = () => {
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

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/hot">
                <button>Hot</button>
              </Link>
            </li>
            <li>
              <Link to="/regular">
                <button>Regular</button>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/hot"
            element={<HotMemList memes={memes} onVote={handleVote} />}
          />
          <Route
            path="/regular"
            element={<RegularMemList memes={memes} onVote={handleVote} />}
          />
          <Route
            path="/"
            element={<RegularMemList memes={memes} onVote={handleVote} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
