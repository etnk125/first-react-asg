import React from "react";
import "./Header.css";
// lower font when scroll down
function fontdown() {
  const header = document.querySelector(".header").classList;
  document.documentElement.scrollTop > 1
    ? header.add("fontdown")
    : header.remove("fontdown");
}

// header will show title
function Header({ url, onSearch, limit }) {
  window.addEventListener("scroll", fontdown);
  return (
    <>
      <h1 className="header">
        <a
          onClick={(e) => {
            e.preventDefault();
            onSearch({ text: "", limit: limit });
            return false;
          }}
          href={url}
        >
          เที่ยวไหนดี
        </a>
      </h1>
    </>
  );
}

export default Header;
