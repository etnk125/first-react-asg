import React from "react";
import "./Header.css";

function Header({ url }) {
  return (
    <>
      <a href={url}>
        <h1>เที่ยวไหนดี</h1>
      </a>
    </>
  );
}

export default Header;
