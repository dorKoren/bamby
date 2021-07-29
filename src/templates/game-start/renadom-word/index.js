import { useContext, memo } from "react";
import { StateContext } from "contexts/app.context";
import "./style.scss";

const RandomWord = () => {
  const appState = useContext(StateContext);

  return (
    <div className="random-word">
      {appState.playerWord.map((letter, key) => {
        const isSpace = letter === "-";
        const spaceClass = isSpace ? "random-word__letter--space" : "";

        return (
          <span key={key} className={`random-word__letter ${spaceClass}`}>
            {isSpace ? "-" : letter}
          </span>
        );
      })}
    </div>
  );
};

export default memo(RandomWord);
