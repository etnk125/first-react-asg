import React from "react";
import Trip from "./Trip";

function Trips({ data, webURL, loading }) {
  return data.length !== 0 ? (
    <ul>
      {data.map((val) => {
        return <Trip data={val} webURL={webURL} />;
      })}
    </ul>
  ) : (
    <center style={{ padding: 20 }}>
      {!loading && "ขออภัยค่ะ ไม่พบสถานที่ๆคุณกำลังมองหา"}
    </center>
  );
}

export default Trips;
