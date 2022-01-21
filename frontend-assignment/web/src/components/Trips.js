import React from "react";
import Trip from "./Trip";
import "./Trips.css";

function Trips({ data, setText, onSearch}) {
  if (data === []) {
    data = [];
  }
  return (
    <ul>
      {data.map((val) => {
        return <Trip data={val} setText={setText} onSearch={onSearch}/>;
      })}
    </ul>
  );
}

export default Trips;
