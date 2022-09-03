import "../../index.scss";
import MainBlock2 from "../helpsComponent/MainBlock2";
import MainBlock3 from "../helpsComponent/MainBlock3";
import MainBlock4 from "../helpsComponent/MainBlock4";
import img from '../../image/image_10.jpg'
import Svg from "../helpsComponent/Svg";
import { cardObj } from "../helpsComponent/cardObj";
import photo from '../../image/image_11.jpg'
const MainPage3 = () => {
    const arr = ['facebook','instagram','pinterest']
  return (
    <div>
      <div className="container">
        <div className="mainpage3">
          <div className="page3block2">
            <MainBlock2 />
          </div>
          <div className="page3fixed">
            <div className="fixedBlock">
                <img alt="" src={img}/>
                <h2>About me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                <div>
                    {arr.map(i=><Svg key={i} id={i} />)}
                </div>
                <div className="posts">
                    <h4>top posts</h4>
                    <ul>
                        {[5,4,7].map(i=>{
                           const obj = cardObj(i)
                            return <li key={i}>
                                <h2>{obj.h2}</h2>
                                <h4>{obj.comment} comments</h4>
                            </li>
                    })}
                    </ul>
                </div>
                <img alt="" src={photo}/>
            </div>
          </div>
        </div>
        </div>
        <MainBlock3 />
        <div className="container_content">
          <MainBlock4 />
      </div>
    </div>
  );
};

export default MainPage3;
