import "../index.scss";
import Svg from "./helpsComponent/Svg";

const Footer = () => {
    const arr =['facebook','twitter','instagram']
  return (
    <div className="footer">
      <div className="container footer_items">
        <div className="footer_item">
          <p>Terms and conditions</p>
          <p>Privacy</p>
        </div>
        <div className="footer_item">
          <p>Follow</p>
          <div>
            {arr.map(i=><Svg key={i} id={i} />)}
          </div>
          
        
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
