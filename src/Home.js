import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import TLOU from "./images/TLOU_Cover.jpg";
import Room from "./images/The_Room.jpg";
import BTD6 from "./images/BTD6.jpg";

const Home = () => {
  return (
  <div className="Home">
    <h1>Top Selling Game Reviews</h1>
    <h2>Explore a post-apocalyptic United States as you search for a cure in <a href="./tlou">The Last of Us</a></h2>
    <h2>Test your brain solving skills figuring out challenging puzzles in <a href="./Room">The Room</a></h2>
    <h2>Enjoy a nice and chill relaxing session taking down waves of Bloons with Monkeys in <a href="./Btd6">Bloons Tower Defense 6</a></h2>
    <img src={TLOU} alt="The Last of Us Cover" /><img src={Room} alt="The Room"/><img src={BTD6} alt="Bloons Tower Defense 6"/>
  </div>
   );
   
 
};

export default Home;
