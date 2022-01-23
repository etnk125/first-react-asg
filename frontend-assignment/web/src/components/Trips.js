import React from "react";
import Trip from "./Trip";
import DisplayImage from "./DisplayImage";

function Trips({ data, webURL, loading, onSearch, limit }) {
  const notFoundURL =
    "https://i.pinimg.com/originals/cf/0f/4b/cf0f4b75bae01690823a9af1ad061ca3.jpg";
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
          title="ขออภัยค่ะ ไม่พบสถานที่ๆคุณกำลังมองหา"
        />
      )}
    </>
  );
}

export default Trips;
