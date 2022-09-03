import "../../index.scss";
import { commentArr } from "./cardObj";
import Svg from "./Svg";

const MainBlock4 = () => {
  const arr = ["twitter", "facebook"];
  const arr2 = commentArr;

  return (
    <div className="mainBlock4">
      <h4>{arr2.length} comments</h4>
      {arr2.map((i,index) => {
        return (
          <div key={index} className="comment">
            <div className="commentIMG">
              {i.img ? (
                <img alt="" src={require(`../../image/image_${i.id}.jpg`)} />
              ) : (
                <p>{i.name[0] + i.surname[0]}</p>
              )}
            </div>
            <div>
              <h3>
                {i.name} {i.surname}
              </h3>
              <p>{i.comment}</p>
              <h4>reply</h4>
            </div>
          </div>
        );
      })}
      <div className="comment">
        <div className="commentIMG">
          <p>jD</p>
        </div>
    
        <input type='text' onChange={e=>e.preventDefault()} value="Join the discussion"/>
      </div>
      <div className="mainBlockSVG">
        <p>connected with</p>
        {arr.map((i) => (
          <Svg key={i} id={i} />
        ))}
      </div>
    </div>
  );
};

export default MainBlock4;
