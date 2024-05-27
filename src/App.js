import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MemList from "./components/MemList";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/hot">Hot</Link>
            </li>
            <li>
              <Link to="/regular">Regular</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MemList />} />
          <Route path="/hot" element={<MemList />} />
          <Route path="/regular" element={<MemList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
