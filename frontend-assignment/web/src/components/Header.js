import React from "react";
import "./Header.css";

function fontdown() {
  const header = document.querySelector(".header").classList;
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? header.add("fontdown")
    : header.remove("fontdown");
}
function Header({ url, onSearch, limit }) {
  window.addEventListener("scroll", fontdown);
  return (
    <>
      <a
        onClick={(e) => {
          e.preventDefault();
          onSearch({ text: "", limit: limit });
          return false;
        }}
        href={url}
      >
        <h1 className="header">เที่ยวไหนดี</h1>
      </a>
    </>
  );
}

export default Header;
