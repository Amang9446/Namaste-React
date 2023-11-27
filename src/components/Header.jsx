import { LOGO_URL } from "../utils/constants";
const Header = () => (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>SignUp</li>
        </ul>
      </div>
    </div>
  );

  export default Header;