import React from "react";
import Guesse from "../Guesse/Guesse";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function PreviousGuesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
        return (
          <Guesse key={index} value={guesses[num]} answer={answer}></Guesse>
        );
      })}
    </div>
  );
}

export default PreviousGuesses;
