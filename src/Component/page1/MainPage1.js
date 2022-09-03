import "../../index.scss";
import { cardObj } from "../helpsComponent/cardObj";
import MainBlock1 from "../helpsComponent/MainBlock1";
import Card from "../helpsComponent/Card";
import icon from '../../image/sendIcon.png'
const MainPage1 = () => {
  return (
    <div>
      <div className="container_content ">
        <MainBlock1 id={1}/>
        <div className="card">
          {[2, 3, 4, 5].map((i) => {
            return <Card key={i} item={cardObj(i)} />;
          })}
        </div>
      </div>
      <div className="signUp">
        <div className="signUpItem">
        <h2>Sign up for our newsletter!</h2>
        <label htmlFor="text"><img alt="" src={icon}/></label>
          <input onChange={e=>e.preventDefault()} type="text"  value="Enter a valid email address"/>
        </div>
      </div>
      <div className="container_content ">
        <div className="card">
          {[6, 7].map((i) => {
            return <Card key={i} item={cardObj(i)} />;
          })}
        </div>
        <div className="button">

        <button>Load more</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage1;
