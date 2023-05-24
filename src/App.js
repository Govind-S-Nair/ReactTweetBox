import React, {useState} from "react";
import Tweet from "./Tweet";

function App(){
  const [users, setUsers] = useState([
    { name: "Govind S Nair", message: "Learning React is fun!"},
    { name: "Haridev Prasad", message: "Crafting stuff using Blender."},
    { name: "Naarasim Krishna", message: "Checking out a new Star Wars game!"},
    { name: "Ram Sankar", message: "Building a Java GUI using AWT."}
  ]);
  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
