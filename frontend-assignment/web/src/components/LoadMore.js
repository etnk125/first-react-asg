import React from "react";
import "./LoadMore.css";

//load more button to increase limit of trip and fetch new data
function LoadMore({ limit, onSearch, text }) {
  return (
    <>
      <button
        onClick={() => {
          onSearch({ text: text, limit: limit + 7 });
          return false;
        }}
      >
        ดูเพิ่มอีกหน่อย
      </button>
    </>
  );
}
export default LoadMore;
