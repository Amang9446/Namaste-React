import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  const [userAdminBtn, setuserAdminBtn] = useState("I am user");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          {/* <li>SignUp</li> */}
          {/* <button
            className="user-btn"
            onClick={() => {
              userAdminBtn === "I am user"
                ? setuserAdminBtn("I am Admin")
                : setuserAdminBtn("I am user");
            }}
          >
            {userAdminBtn}
          </button> */}
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
