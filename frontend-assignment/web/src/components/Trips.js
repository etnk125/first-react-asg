import React from "react";
import Trip from "./Trip";
import DisplayImage from "./DisplayImage";

function Trips({ data, webURL, loading, onSearch, limit }) {
  /* url for notfound db */

  const notFoundURL =
    "https://i.pinimg.com/originals/cf/0f/4b/cf0f4b75bae01690823a9af1ad061ca3.jpg";
  // checking have data? data:notfound-img
  return data.length !== 0 ? (
    <ul>
      {data.map((val) => {
        return (
          <Trip data={val} webURL={webURL} onSearch={onSearch} limit={limit} />
        );
      })}
    </ul>
  ) : (
    <>
      {!loading && (
        <DisplayImage
          url={notFoundURL}
          title="ขออภัยฮะ ไม่พบสถานที่ๆคุณกำลังมองหาอยู่"
        />
      )}
    </>
  );
}

export default Trips;
