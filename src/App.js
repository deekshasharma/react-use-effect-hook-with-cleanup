import React, { useState } from "react";
import "./App.css";
import { Poem } from "./Poem";
import Quote from "./Quote";

function App() {
  const [showQuotes, setQuotes] = useState(true);
  const [showPoems, setPoems] = useState(false);

  const onClickPoems = () => {
    setPoems(true);
    setQuotes(false);
  };

  const onClickQuotes = () => {
    setQuotes(true);
    setPoems(false);
  };

  return (
    <div className="App">
      <button className="quotes-button" onClick={onClickQuotes}>
        QUOTES
      </button>
      <button className="poems-button" onClick={onClickPoems}>
        POEMS
      </button>
      {showPoems && <Poem />}
      {showQuotes && <Quote />}
    </div>
  );
}

export default App;
