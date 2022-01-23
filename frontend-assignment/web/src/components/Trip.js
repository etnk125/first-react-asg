import React from "react";
import TextTruncate from "react-text-truncate";
import "./Trip.css";

/* one card */

function Trip({ data, webURL, onSearch, limit }) {
  /*from props*/

  const title = data.title;
  const url = data.url;
  const eid = data.eid;
  const description = data.description;
  const photos = data.photos;
  const tags = data.tags;
  return (
    <>
      {/* reveal make li reveal when scroll */}
      <li key={eid} className="reveal">
        {/* main-img */}
        <a href={url}>
          <img src={photos[0]} alt="" className="main-img"></img>
        </a>
        {/* right side of card */}
        <div className="detail">
          {/* wrap only text */}
          <div className="text-wrapper">
            {/* trip-title */}
            <a href={url} className="title-link">
              <TextTruncate
                line={2}
                element="a"
                truncateText="…"
                text={title}
                id="title"
              />
            </a>
            {/* trip-description */}
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
            {/* tags */}
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
                    >
                      {val}
                    </a>
                  </>
                );
              })}
            </div>
          </div>
          {/* list of photo */}
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
