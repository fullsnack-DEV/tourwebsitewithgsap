import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/">
            {" "}
            <h1 className="header__logo--heading">LOGO</h1>{" "}
          </a>
        </div>
        <nav className="header__nav">
          <a href="/">Home</a>
          <a href="/">Pages</a>
          <a href="/">Blog</a>
          <a href="/">Portfolio</a>
          <a href="/">Get Started</a>
        </nav>
      </div>
    </div>
  );
};
