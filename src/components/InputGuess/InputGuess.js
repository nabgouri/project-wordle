import React from "react";

function InputGuess({ addGuess }) {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length > 5) {
      return;
    }
    const guessWord = guess.toUpperCase();
    addGuess(guessWord);
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5}"
        value={guess.toUpperCase()}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
      />
    </form>
  );
}

export default InputGuess;
