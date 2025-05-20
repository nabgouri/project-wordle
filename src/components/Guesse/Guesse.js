import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

let row = range(5);
function Guesse({ value, answer }) {
  let results = value ? checkGuess(value, answer) : "";
  return (
    <p className="guess">
      {row.map((num) => {
        return (
          <span
            key={num}
            className={`cell ${value ? results[num].status : ""}`}
          >
            {value ? value[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guesse;
