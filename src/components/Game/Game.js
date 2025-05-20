import React from "react";

import { sample, range } from "../../utils";

import InputGuess from "../InputGuess/InputGuess";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import Banner from "../Banner/Banner";
import { WORDS } from "../../data";

const answer = sample(WORDS);
console.log(answer);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const addGuess = (guess) => {
    let nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  };
  let didWon = guesses.includes(answer);
  let numOfGuesses = guesses.filter((guess) => guess.length !== 0).length;
  return (
    <>
      <PreviousGuesses answer={answer} guesses={guesses} />
      {guesses.length === 6 || didWon ? (
        <Banner answer={answer} numOfGuesses={numOfGuesses} didWon={didWon} />
      ) : (
        <InputGuess addGuess={addGuess} />
      )}
    </>
  );
}

export default Game;
