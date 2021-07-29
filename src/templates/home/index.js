import Page from "global-components/page";
import backgroundImage1 from "images/background-image-1.png";
import CommonLinkBtn from "global-components/common-link-btn";
import "./style.scss";

const Home = () => {
  return (
    <Page
      className="home-page"
      title="Home Page"
      backgroundImg={backgroundImage1}
    >
      <h1 className="home-page__title">gue_s t_e wo_d</h1>
      <h2 className="home-page__max-score">{`MAX SCORE: ${
        localStorage.getItem("maxScore") || 0
      }`}</h2>

      <CommonLinkBtn className="home-page__link" to="/game-start">
        start play !
      </CommonLinkBtn>
    </Page>
  );
};

export default Home;
