import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers.js";
import Input from "../Input/Input";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const answerLenght = answer.length;

function getGuesses(arr) {
  arr = arr.filter((x) => x[0].letter !== "");

  const arrLength = Array.isArray(arr) ? arr.length : 0;
  if (arrLength < answerLenght) {
    for (let i = answerLenght - arrLength; i > 0; i--) {
      const emptyWord = Array(answerLenght).fill({ letter: "", status: "" });
      arr.push(emptyWord);
    }
  }

  return arr.reverse().slice(0, NUM_OF_GUESSES_ALLOWED).reverse();
}

function Game() {
  const [guessedWords, setGuessedWords] = useState([]);

  return (
    <>
      <div className="guess-results">
        {getGuesses(guessedWords).map((w) => {
          return (
            <p className="guess" key={crypto.randomUUID()}>
              {w.map((c) => {
                return (
                  <span
                    className={`cell ${c.status}`}
                    key={crypto.randomUUID()}
                  >
                    {c.letter}
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
      <Input
        setWord={(w) => {
          const checkResult = checkGuess(w.padEnd(answerLenght, " "), answer);
          const nextGuessedWords = [...guessedWords, checkResult];
          setGuessedWords(nextGuessedWords);
        }}
      />
    </>
  );
}

export default Game;
