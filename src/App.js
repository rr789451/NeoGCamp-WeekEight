import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍐": "Pear",
  "🍒": "Cherry",
  "🍓": "Strawberry"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Emoji is not present in our dictionary";
    }
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={inputHandler} />
      <div style={{ fontSize: "1rem", padding: "1rem" }}>{meaning}</div>
      <h2>Emojis</h2>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
