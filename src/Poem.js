import React from "react";
import "./App.css";

const poems = [
  "After the Sea-Ship-after the whistling winds,After the white-gray sails, taut to their spars and ropes,Below, a myriad, myriad waves, hastening, lifting up their necks",
  "The fog comes on little cat feet, it sits looking over harbor and city",
  "I now delight, In spite Of the might And the right"
];
export const Poem = () => {
  return (
    <div className="App">
      <h1 className="App-header">POEMS FOR YOU!</h1>
      {poems.map((poem, key) => (
        <div key={key}>
          <h3>{poem}</h3>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};
