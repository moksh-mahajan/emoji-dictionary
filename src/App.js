import "./styles.css";
import { useState } from "react";
const emojiDictionary = {
  "❤️": "heart",
  "🙏": "folded hands",
  "👍": "thumbs up",
  "✌️": "victory hand",
  "👌": "ok hand"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We do not have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    const meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside out!</h1>
      <input onChange={emojiInputHandler} />
      <p>meaning: {meaning}</p>
      <h3>emojis we know</h3>
      {emojisWeKnow.map((e) => (
        <span
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          onClick={() => emojiClickHandler(e)}
          key={e}
        >
          {e}{" "}
        </span>
      ))}
    </div>
  );
}
