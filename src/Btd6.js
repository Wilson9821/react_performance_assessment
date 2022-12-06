import React from "react";
import BTD6_Gameplay from "./images/BTD6_Gameplay.jpg";

const Btd6 = () => {
  return (
    <div className="BTD6">
        <h1>Bloons Tower Defense 6 Review</h1>
      <p><img src={BTD6_Gameplay} alt="Bloons Tower Defense 6 Gameplay" />Relax with some sweet tunes and blissful popping noises as you endulge in the calmness that Bloons
        Tower Defense 6(BTD6) brings. Choose from a variety of Easy, Medium, Hard, Advanced, and Expert maps 
        with a wide choice of Monkeys and Heroes all with varying abilities and weapons. Take the very casual route
        or take a more grindy quick to finish type strat with using meta characters and towers. Rating 9.5/10
      </p>
      <h3>Return <a href="./">Home</a></h3>
    </div>
  );
};

export default Btd6;
