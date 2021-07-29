import "./global-styles/index.scss";
import { Route, Switch } from "react-router-dom";
import { AppProvider } from "contexts/app.context";

import Home from "templates/home";
import GameStart from "templates/game-start";
import GameOver from "templates/game-over";
import ScorePage from "templates/score-page";

const App = () => {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game-start" component={GameStart} />
        <Route exact path="/game-over" component={GameOver} />
        <Route exact path="/score-page" component={ScorePage} />
      </Switch>
    </AppProvider>
  );
};

export default App;
