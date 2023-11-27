import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://penji.co/wp-content/uploads/2022/08/10.-mr.-d-food-logo.jpg"
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

const RestaurantCard = () => (
<div className="res-card">
    <img className="res-logo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p4fn2esrcxfeeefllnjz' alt='res-img'/>
    <h3>Sai Plaza</h3>
    <h4>Briyani, North Indian</h4>
    <h4>4.4 stars</h4>
    <h4>22 mins</h4>
</div>
);

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
