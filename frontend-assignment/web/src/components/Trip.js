import React from "react";
import TextTruncate from "react-text-truncate"; // recommend
import "./Trip.css";

function Trip({ data, webURL, onSearch, limit }) {
  const title = data.title;
  const url = data.url;
  const eid = data.eid;
  const description = data.description;
  const photos = data.photos;
  const tags = data.tags;
  return (
    <>
      <li key={eid} className="reveal">
        <a href={url}>
          <img src={photos[0]} alt="" className="main-img"></img>
        </a>
        <div className="detail">
          <div className="text-wrapper">
            <a href={url} className="title-link">
              <TextTruncate
                line={2}
                element="a"
                truncateText="…"
                text={title}
                id="title"
              />
            </a>
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
            <div className="tag">
              หมวด -
              {tags.map((val, i) => {
                return (
                  <>
                    {i === tags.length - 1 ? " และ " : " "}
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        onSearch({ text: val, limit: limit });
                        return false;
                      }}
                      href={`${webURL}?keyword=${val}`}
                      // href="#"
                    >
                      {val}
                    </a>
                  </>
                );
              })}
            </div>
          </div>
          <ul className="photos">
            <li>
              <a href={url}>
                <img src={photos[1]} className="small-img" alt=""></img>
              </a>
            </li>
            <li>
              <a href={url}>
                <img src={photos[2]} className="small-img" alt=""></img>
              </a>
            </li>
            <li>
              <a href={url}>
                <img src={photos[3]} className="small-img" alt=""></img>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

export default Trip;
