import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const onSearch = props.onSearch;
  const setText = props.setText;
  function inputHandler(e) {
    e.preventDefault();
    const text = e.target.value;
    setText(text);
    onSearch({ text: text, limit: props.limit });
  }
  return (
    <>
      <input
        type="text"
        className="searchBar"
        id="searchBar"
        placeholder="หาที่เที่ยวแล้วไปกัน..."
        onInput={inputHandler}
        value={props.text}
      />
    </>
  );
}

export default SearchBar;
