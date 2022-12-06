import React from "react";
import TLOU from "./images/TLOU_Gameplay.jpg";

const Tlou = () => {
  return (
    <div className="TLOU">
      <h1>The Last of Us Review</h1>
      <p><img src={TLOU} alt="The Last of Us Gameplay" />Play as experienced 52 year old Joel Miller as you travel across the United States
        looking to find a cure for the Cordyceps fungus that has infected a majority of the population. 
        Survivors are forced into quarantine zones looking for ways to stay alive. Every day is a new 
        fight for survival against other people and hordes of infected. Factions form together with
        tight knit groups making exploring hard to do. Stay prepared to be on your feet in this thrill
        rush fight for all of mankind to continue. Rating 9/10
      </p>
      <h3>Return <a href="./">Home</a></h3>
    </div>
  );
};

export default Tlou;
