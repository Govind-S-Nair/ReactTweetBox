import React from "react";
import Tweet from "./Tweet";

function App(){
  return(
    <div className="app">
      <Tweet name="Govind S Nair" message="Learning React is fun!" likes="Likes: 30"/>
      <Tweet name="Haridev Prasad" message="Crafting stuff using Blender." likes="Likes: 32"/>
      <Tweet name="Naarasim Krishna" message="Checking out a new Star Wars game!" likes="Likes: 66"/>
      <Tweet name="Ram Sankar" message="Building a Java GUI using AWT." likes="Likes: 38"/>
    </div>
  );
}

export default App;
