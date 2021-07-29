import { useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "contexts/app.context";
import Page from "global-components/page";
import Points from "./points";
import RandomWord from "./renadom-word";
import Guess from "./guess";
import Timer from "./timer";
import backgroundImage2 from "images/background-image-2.png";
import "./style.scss";

const GameStart = props => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const prevMaxScore = +localStorage.getItem("maxScore") || 0;

  const handleClick = e => {
    e.preventDefault();
    appDispatch({ type: "RESET_GAME" });
  };

  useEffect(() => {
    if (appState.maxScoreCounter) {
      if (prevMaxScore < appState.victoryPoints) {
        localStorage.setItem("maxScore", appState.victoryPoints);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.maxScoreCounter]);

  useEffect(() => {
    appState.isLoose && props.history.push("/game-over");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.isLoose]);

  return (
    <Page
      className="game-start"
      title="Game Start"
      backgroundImg={backgroundImage2}
    >
      <section className="random-words-wrapper">
        <Guess />
        <RandomWord />
      </section>

      <section className="points-wrapper">
        <Points title="victory points" points={appState.victoryPoints} />
        <Points title="life points" points={appState.lifePoints} />
      </section>

      <Timer />

      {appState.isWin ? (
        <button className="common-link-btn" onClick={handleClick}>
          NEW LEVEL
        </button>
      ) : null}
    </Page>
  );
};

export default GameStart;
