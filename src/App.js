import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": " Face Without Mouth",
  "😏 ": "Smirking Face",
  "😒 ": "Unamused Face",
  "🙄 ": "Face with Rolling Eyes",
  "😬 ": "Grimacing Face",
  "🤥 ": "Lying Face",
  "😌 ": "Relieved Face",
  "😔 ": "Pensive Face",
  "😪 ": "Sleepy Face",
  "🤤 ": "Drooling Face",
  "😴 ": "Sleeping Face",
  "😷 ": "Face with Medical Mask",
  "🤒 ": "Face with Thermometer",
  "🤕 ": "Face with Head-Bandage",
  "🤢 ": "Nauseated Face",
  "🤮 ": "Face Vomiting",
  "🤧 ": "Sneezing Face",
  "🥵 ": "Hot Face",
  "🥶 ": "Cold Face",
  "🥴 ": "Woozy Face",
  "😵 ": "Dizzy Face",

  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",

  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Pouting Face"
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
      <div
        style={{
          border: "2px solid",
          paddingLeft: "2rem",
          paddingRight: "2rem"
        }}
      >
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
    </div>
  );
}
