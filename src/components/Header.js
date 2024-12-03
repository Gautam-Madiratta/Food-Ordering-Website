import { Logo_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={Logo_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
