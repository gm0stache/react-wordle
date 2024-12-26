import { React, useState, useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function getGuesses(arr) {
  const arrLenght = Array.isArray(arr) ? arr.lenght : 0;

  if (arrLenght >= 6) {
    console.log("test");

    return arr.slice(arrLenght - 6 - 1, arrLenght - 1);
  }

  let result = [];
  for (let i = (6 - arrLenght); i > 0; i--) {
    result.push("");
  }

  console.log("test2");
  return result;
}

function Game() {
  const [guessedWords, setGuessedWords] = useState([]);
  // const [relevantGuesses, setRelevantGuesses] = useState(() => getGuesses(guessedWords));

  // useEffect(() => {
  //   console.log("guessedWords in 'useEffect': " + guessedWords);
  //   console.log("updating relevantGuesses: " + getGuesses(guessedWords));

  //   setRelevantGuesses(getGuesses(guessedWords));
  // }, [guessedWords])

  return (
    <>
      <div className="guess-results">
        {guessedWords.map(w => {
          return (
            <p className="guess" key={crypto.randomUUID()}>
              {w.padEnd(NUM_OF_GUESSES_ALLOWED, " ").split('').map(c => {
                return <span className="cell" key={crypto.randomUUID()}>{c}</span>
              })}
            </p>
          )
        })}
      </div>
      <Input setWord={(w) => {
        const nextGuessedWords = [...guessedWords, w];
        setGuessedWords(nextGuessedWords);
      }} />
    </>
  );
}

export default Game;
