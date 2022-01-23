import React from "react";
import "./DisplayImage.css";
//show text with photo
function DisplayImage({ url, title }) {
  return (
    <div className="wrapper">
      <h3>{title}</h3>
      <img src={url} alt=""></img>
    </div>
  );
}

export default DisplayImage;
