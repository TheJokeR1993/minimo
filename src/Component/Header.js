import "../index.scss";
import logo from '../image/logo.jpg'
const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <div className="logo">
        <img src={logo} alt=""/>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#"> lifestyle</a>
            </li>
            <li>
              <a href="#"> photodiary</a>
            </li>
            <li>
              <a href="#"> music</a>
            </li>
            <li>
              <a href="#"> travel</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
