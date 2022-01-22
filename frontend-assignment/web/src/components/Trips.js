import React from "react";
import Trip from "./Trip";

function Trips({ data, webURL }) {
  if (data.length !== 0) {
    return (
      <ul>
        {data.map((val) => {
          return <Trip data={val} webURL={webURL} />;
        })}
      </ul>
    );
  }
  return <></>;
}

export default Trips;
