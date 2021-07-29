import randomWords from "random-words";

const reducer = (state, action) => {
  switch (action.type) {
    case "GUESS_LETTER":
      let newPlayerWord = state.playerWord.map((letter, key) =>
        action.guess === state.randomWord.charAt(key) ? action.guess : letter
      );

      return { ...state, playerWord: newPlayerWord };

    case "ADD_LETTER_TO_CHOOSEN_LETTERS":
      const choosenLetters = state.choosenLetters.add(action.guess);
      return { ...state, choosenLetters: choosenLetters };

    case "CHECK_WIN":
      if (state.playerWord.join("") === state.randomWord) {
        let counter = state.maxScoreCounter + 1;
        let points = state.victoryPoints + 1;

        return {
          ...state,
          isWin: true,
          victoryPoints: points,
          maxScoreCounter: counter,
          stopTimer: true,
        };
      }
      return state;

    case "DECREASE_LIFE_POINT":
      const points = state.lifePoints - 1;
      return { ...state, lifePoints: points };

    case "CHECK_LOOSE":
      return state.lifePoints === 0
        ? { ...state, isLoose: true, stopTimer: true }
        : state;

    case "SET_LOOSE":
      return { ...state, isLoose: true };

    case "SET_TIME_LEFT":
      const timeLeft = state.timeLeft - 1;
      return { ...state, timeLeft: timeLeft };

    case "RESET_GAME":
      const randomWord = randomWords({
        exactly: 1,
        wordsPerString: state.victoryPoints + 1,
        separator: "-",
      })[0];

      const playerWord = new Array(randomWord.length)
        .fill("")
        .map((l, key) => (l = randomWord.charAt(key) === "-" ? "-" : l));

      return {
        ...state,
        randomWord: randomWord,
        playerWord: playerWord,
        choosenLetters: new Set(),
        isWin: false,
        timeLeft: 30,
        stopTimer: false,
      };

    default:
      return state;
  }
};

export default reducer;
