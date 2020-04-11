import React from "react";
import "../styles/header.css";
function Header() {
  return (
    <header>
      <div className="header-message">
        {" "}
        <p className="head-title">Employee Directory</p>
        <p>Use the search fields to modify results</p>
      </div>
    </header>
  );
}
export default Header;
