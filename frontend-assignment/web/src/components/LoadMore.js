import React from "react";
import "./LoadMore.css";

function LoadMore({ limit, onSearch, text }) {
  return (
    <>
      <button
        onClick={() => {
          onSearch({ text: text, limit: limit + 2 });
          return false;
        }}
      >
        show more
      </button>
    </>
  );
}
export default LoadMore;
