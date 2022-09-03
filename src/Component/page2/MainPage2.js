import "../../index.scss";
import MainBlock2 from "../helpsComponent/MainBlock2";
import MainBlock3 from "../helpsComponent/MainBlock3";
import MainBlock4 from "../helpsComponent/MainBlock4";

const MainPage2 = () => {
  return (
    <div>
      <div className="container_content">
        <MainBlock2 id={2}/>
      </div>
      <MainBlock3 />
      <div className="container_content">
        <MainBlock4 />
      </div>
    </div>
  );
};

export default MainPage2;
