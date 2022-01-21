import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const onSearch = props.onSearch;
  const setText = props.setText;
  // const [text, setText] = useState("");
  function inputHandler(e) {
    e.preventDefault();
    const text = e.target.value;
    setText(text);
    onSearch(text);
  }
  // function changeHandler(e) {
  //   e.preventDefault();
  //   const text = e.target.value;
  //   setText(text);
  // }
  // function enterHandler(e) {
  //   if (e.key === "Enter") {
  //     onSearch(text);
  //   }
  // }
  return (
    <>
      <input
        type="text"
        className="searchBar"
        id="searchBar"
        placeholder="หาที่เที่ยวแล้วไปกัน..."
        onInput={inputHandler}
        // onChange={changeHandler}
        // onKeyPress={enterHandler}
        value={props.text}
      />
    </>
  );
}

export default SearchBar;
