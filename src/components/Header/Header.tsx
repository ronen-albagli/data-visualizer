import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const headerElements = [
    { name: "views", route: "/views" },
    { name: "save", route: "/save" },
    { name: "share", route: "/share" },
  ];
  return (
    <div className="app-header">
      {headerElements.map((element) => (
        <Link to={element.name}>{element.name}</Link>
      ))}
    </div>
  );
};

export default Header;
