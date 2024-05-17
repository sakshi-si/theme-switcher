import React from "react";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header>
      <div className="container">
        <div className="flex-header">
          <div className="content">
            <h1>Social Media Dashboard</h1>
            <p className="total-count">Total Followers: 23,004</p>
          </div>
          <hr />
          <div className="switch" onClick={toggleTheme}>
            <p>Dark Mode</p>
            <div
              className={`switch-btn ${theme === "light" ? "off" : ""}`}
              id="switch"
            >
              <div className="circle-btn"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
