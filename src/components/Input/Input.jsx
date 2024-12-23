import { React, useState } from "react";

function Input({ setWord }) {
  const [word, setWordTemp] = useState("");

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setWord(word);
        setWordTemp("");
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={(e) => setWordTemp(e.target.value)}
        value={word}
      />
    </form>
  );
}

export default Input;
