import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

function Nav(props) {
  return (
    <>
      <nav>
        <Header url={props.webURL} />
        <SearchBar
          onSearch={props.onSearch}
          text={props.text}
          setText={props.setText}
        />
      </nav>
    </>
  );
}

export default Nav;
