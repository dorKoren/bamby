import React, { createContext, useReducer } from "react";
import appReducer from "reducers/app.reducer";
import randomWords from "random-words";

const randomWord = randomWords({
  exactly: 1,
  wordsPerString: 1,
  separator: "-",
})[0];

//const randomWord = "banana-banana";
const playerWord = new Array(randomWord.length)
  .fill("")
  .map((l, key) => (l = randomWord.charAt(key) === "-" ? "-" : l));

const initialState = {
  randomWord: randomWord,
  playerWord: playerWord,

  choosenLetters: new Set(),
  victoryPoints: 0,
  lifePoints: 3,
  isWin: false,
  isLoose: false,
  maxScoreCounter: 0,
  timeLeft: 30,
  stopTimer: false,
};

export const StateContext = createContext();
export const DispatchContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
