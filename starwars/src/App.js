import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import CharCard from "./components/CharCard.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Also thanks to Ben who showed me the key={cv} thing a few lessons back; still no clue how it works but it's shorter than my crazy foreachs and shit

  const [charState, setCharState] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharState(response.data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {Object.keys(charState).map(cv => {
        return <CharCard data={charState[cv]} key={cv} />;
      })}
    </div>
  );
};

export default App;