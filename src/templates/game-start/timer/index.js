import { useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "contexts/app.context";
import "./style.scss";

const Timer = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  useEffect(() => {
    if (appState.timeLeft > 0 && !appState.stopTimer) {
      const timeout = setTimeout(
        () => appDispatch({ type: "SET_TIME_LEFT" }),
        1000
      );
      return () => clearInterval(timeout);
    } else if (appState.timeLeft === 0) {
      appDispatch({ type: "SET_LOOSE" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.timeLeft]);

  return <div className="timer">{appState.timeLeft}</div>;
};

export default Timer;
