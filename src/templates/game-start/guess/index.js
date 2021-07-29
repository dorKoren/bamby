import { useContext, useState, memo } from "react";
import { StateContext, DispatchContext } from "contexts/app.context";
import "./style.scss";

const Guess = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [guess, setGuess] = useState("");

  const handleChange = e => {
    setGuess(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    const letterExistInRandomWord = appState.randomWord.includes(guess);
    const letterExistInChoosenLetters = appState.choosenLetters.has(guess);

    e.preventDefault();

    if (guess && letterExistInRandomWord && !letterExistInChoosenLetters) {
      appDispatch({ type: "ADD_LETTER_TO_CHOOSEN_LETTERS", guess });
      appDispatch({ type: "GUESS_LETTER", guess });
      appDispatch({ type: "CHECK_WIN", guess });
    } else if (!guess) {
      alert("YOU MUST CHOOSE LETTER");
    } else if (letterExistInChoosenLetters) {
      alert("YOU HAVE ALREADY CHOOSE THIS LETTER");
    } else if (!letterExistInRandomWord) {
      appDispatch({ type: "DECREASE_LIFE_POINT", guess });
      appDispatch({ type: "CHECK_LOOSE" });
    }

    setGuess("");
  };

  return (
    <form className="guess" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">guess letter: </label>
      <input
        id="guess-input"
        value={guess}
        maxLength="1"
        onChange={handleChange}
      />

      <button className="common-link-btn" type="submit">
        GUESS !
      </button>
    </form>
  );
};

export default memo(Guess);
