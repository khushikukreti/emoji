import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");
  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("not in dictionary");
    }
  }
  function emojiHandler(item) {
    setMeaning(emojiDictionary[item]);
  }
  return (
    <div className="App">
      <h1> Emojipedia</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder="search emoji"
        style={{ padding: "1rem" }}
      />
      <h2>{emoji}</h2>
      <h2>{meaning}</h2>
      <h3>
        {emojis.map((emoji) => (
          <span
            onClick={() => emojiHandler(emoji)}
            style={{ cursor: "pointer", padding: "0.5rem", fontSize: "2rem" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))}
      </h3>
    </div>
  );
}
