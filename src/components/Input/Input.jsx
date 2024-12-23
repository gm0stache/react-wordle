import { React, useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function Input({ setWord }) {
  const [word, setWordTemp] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setWord(word);
        setWordTemp("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength="1"
        maxLength={NUM_OF_GUESSES_ALLOWED}
        onChange={(e) => setWordTemp(e.target.value)}
        value={word}
      />
    </form>
  );
}

export default Input;
