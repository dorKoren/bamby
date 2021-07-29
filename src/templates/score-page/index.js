import Page from "global-components/page";
import backgroundImage4 from "images/background-image-4.png";
import Table from "./table";

const ScorePage = props => {
  const { name, phone } = props.location.state;

  return (
    <Page
      className="score-page"
      title="Score Page"
      backgroundImg={backgroundImage4}
    >
      <h1 className="home-page__title">SCORE PAGE</h1>
      <Table name={name} phone={phone} />
    </Page>
  );
};

export default ScorePage;
