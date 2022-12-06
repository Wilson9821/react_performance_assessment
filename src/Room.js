import React from "react";
import Room_Gameplay from "./images/The_Room_Gameplay.jpg";

const Room = () => {
  return (
    <div className="Room">
      <h1>The Room Review</h1>
      <p><img src={Room_Gameplay} alt="The Room Gameplay" />Experience a series of mind numbing challenges with a special eyeglass that allows you to see 
        items that you could not see with the human eye. Every puzzle has a unique way to solve it. In addition to having a 
        unique way of being solved, the location for each puzzle changes. Rating 9.5/10
      </p>
      <h3>Return <a href="./">Home</a></h3>
    </div>
  );
};

export default Room;
