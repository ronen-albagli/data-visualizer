import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.scss";
import logo from "../../assets/images/57d6f56c-9448-4a6f-bc35-2364d1eaa08a_200x200.png";
const SideNav = () => {
  const navElements = [
    { name: "Let's Go", route: "/search" },
    { name: "Management", route: "/management" },
    { name: "Logout", route: "/logout" },
  ];
  return (
    <div className={`app-side-nav`}>
      <div className="app-logo">
        <img src={logo} alt="logo" />
        <Link to={"/home"}></Link>
      </div>
      <div className="nav-elements">
        {navElements.map((element) => (
          <Link to={element.route}>{element.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
