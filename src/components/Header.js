import { useState } from "react";
import { Logo_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginInfo, setLoginInfo] = useState("Log in");

  const loginClicked = () => {
    loginInfo === "Log in" ? setLoginInfo("Log out") : setLoginInfo("Log in");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div>
        <img className="logo" src={Logo_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/Groceries">Groceries</Link>
          </li>
          <li>Cart</li>
          <button className="login-info" onClick={loginClicked}>
            {loginInfo}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
