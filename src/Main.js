import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
import Tlou from "./Tlou";
import Btd6 from "./Btd6";
import "./index.css";

function Main() {
  return (
    <div className="header">
      <h1>Video Game Reviews</h1>
      <Router>
        
        <Routes className="content">
          <Route exact path="/" element={<Home />} />
          <Route path="/tlou" element={<Tlou />} />
          <Route path="/room" element={<Room />} />
          <Route path="/btd6" element={<Btd6 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;