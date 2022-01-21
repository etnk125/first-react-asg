import React from "react";
import TextTruncate from "react-text-truncate"; // recommend
import "./Trip.css";

function Trip({ data, setText, onSearch }) {
  const title = data.title;
  const url = data.url;
  const eid = data.eid;
  const description = data.description;
  const photos = data.photos;
  const tags = data.tags;

  console.log(photos);
  return (
    <>
      <li key={eid} className="grid">
        <a href={url}>
          <img src={photos[0]} alt="" className="main-img"></img>
        </a>
        <div className="detail">
          <div className="text-wrapper">
            <a href={url} id="title">
              {title}
            </a>
            {/* <p>{description}</p> */}
            <TextTruncate
              line={3}
              element="p"
              truncateText="…"
              text={description}
              textTruncateChild={
                <a href={url} className="readmore">
                  อ่านต่อ
                </a>
              }
            />
            {/* <a href={url} className="readMore">
              อ่านต่อ
            </a> */}
            <div className="tag">
              หมวด -
              {tags.map((val, i) => {
                return (
                  <>
                    {i == tags.length - 1 ? " และ " : " "}{" "}
                    <a
                      href="#"
                      onClick={() => {
                        setText(val);
                        onSearch(val);
                      }}
                    >
                      {val}
                    </a>
                  </>
                );
              })}
            </div>
          </div>
          <ul class="photo-grid">
            <li>
              <img src={photos[1]} className="small-img" alt=""></img>
            </li>
            <li>
              <img src={photos[2]} className="small-img" alt=""></img>
            </li>
            <li>
              <img src={photos[3]} className="small-img" alt=""></img>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

export default Trip;
