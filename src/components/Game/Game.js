import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function getGuesses(arr) {
  arr = arr.filter((x) => x !== "");

  const arrLength = Array.isArray(arr) ? arr.length : 0;
  if (arrLength < 6) {
    for (let i = 6 - arrLength; i > 0; i--) {
      arr.push("");
    }
  }

  return arr.reverse().slice(0, 6).reverse();
}

function Game() {
  const [guessedWords, setGuessedWords] = useState([]);

  return (
    <>
      <div className="guess-results">
        {getGuesses(guessedWords).map((w) => {
          return (
            <p className="guess" key={crypto.randomUUID()}>
              {w
                .padEnd(NUM_OF_GUESSES_ALLOWED, " ")
                .split("")
                .map((c) => {
                  return (
                    <span className="cell" key={crypto.randomUUID()}>
                      {c}
                    </span>
                  );
                })}
            </p>
          );
        })}
      </div>
      <Input
        setWord={(w) => {
          const nextGuessedWords = [...guessedWords, w];
          setGuessedWords(nextGuessedWords);
        }}
      />
    </>
  );
}

export default Game;
