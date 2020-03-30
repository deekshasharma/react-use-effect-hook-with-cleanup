import React, { useEffect, useState } from "react";
import "./App.css";

function Quote() {
  const [quote, setQuote] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes?limit=10")
      .then(response => response.json())
      .then(jsonResponse => {
        setQuotes(jsonResponse.results);
      });
    return () => {
      alert("ALERT!!! Quote will unmount. Cleaning up!")
      setQuote("");
      setQuotes([]);
    };
  }, []);

  useEffect(() => {
    getQuote();
  }, [quotes]);

  const getQuote = () => {
    let id = Math.floor(Math.random() * 9) + 0;
    setQuote(quotes.length > 0 ? quotes[id]["content"] : "");
  };

  return (
    <div className="App">
      <h1 className="App-header">QUOTES TO KEEP YOU GOING!</h1>
      <h3>{quote}</h3>
      <button className="next-button" onClick={getQuote}>NEXT QUOTE</button>
    </div>
  );
}

export default Quote;
