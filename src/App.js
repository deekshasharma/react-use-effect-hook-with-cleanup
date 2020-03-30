import React, { useState, useEffect } from "react";
import "./App.css";
/**
 * Goal:
 * 1. User is by default subscribed to daily quotes.
 * 2. On each refresh there should be a new quote on the screen.
 * 3. When user clicks on Unsubscribe button, it should display "You are not subscribed to the quotes"
 * and there should be no quote on the screen.Additionally user should now see "SUBSCRIBE" button.
 * 4. When user clicks the "SUBSCRIBE" button , the quotes should start to displayaand every refresh should render a new quote.
 */

function App() {
  const [quote, setQuote] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes?limit=10")
      .then(response => response.json())
      .then(jsonResponse => {
        setQuotes(jsonResponse.results);
      });
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
      <h1>Quote of the Day!</h1>
      <h3>{quote}</h3>
      <button onClick={() => console.log("un")}>UNSUBSCRIBE</button>
      <button onClick={getQuote}>NEXT QUOTE</button>
    </div>
  );
}

export default App;

const Unsub = () => {
  return (
    <h3>You have unsubscribed! To view quotes click "SUBSCRIBE" button</h3>
  );
};
