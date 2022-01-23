import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./Nav.css";

//nav bar contain header and searchbar
function Nav(props) {
  return (
    <>
      <nav>
        <Header
          limit={props.limit}
          url={props.webURL}
          onSearch={props.onSearch}
        />
        <SearchBar
          onSearch={props.onSearch}
          text={props.text}
          setText={props.setText}
          limit={props.limit}
        />
      </nav>
    </>
  );
}

export default Nav;
