import Page from "global-components/page";
import Form from "./form";
import backgroundImage3 from "images/background-image-3.png";
import "./style.scss";

const GameOver = ({ history }) => {
  return (
    <Page
      className="game-over"
      title="Game Over"
      backgroundImg={backgroundImage3}
    >
      <h1 className="game-over__title">game over</h1>
      <Form className="game-over__form" history={history} />
    </Page>
  );
};

export default GameOver;
