import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Trips from "./components/Trips";
import DisplayImage from "./components/DisplayImage";
import LoadMore from "./components/LoadMore";
import fetchData from "./components/fetchData";
import { reveal } from "./components/Scroll.js";
import "./components/Scroll.css";

function App() {
  const dbURL = "http://localhost:9000/";
  const webURL = "http://localhost:3000/";
  const loadingURL =
    "https://i.pinimg.com/originals/b5/27/c2/b527c21e2560f61957cb6090bc3a7825.jpg";
  const defaultLimit = 2;
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const keyword = searchParams.get("keyword");
  const [state, setState] = useState({ data: [] });
  const [text, setText] = useState(keyword ? keyword : "");
  const [limit, setLimit] = useState(defaultLimit);
  const [loading, setLoading] = useState(false);
  async function onSearch({ text, limit }) {
    setLoading(true);
    setText(text);
    setLimit(limit);
    const data = await fetchData({ url: dbURL, limit: limit, text: text });
    setState((prev) => {
      return {
        ...prev,
        data: data,
      };
    });
    reveal();
    setLoading(false);
  }

  useEffect(() => {
    onSearch({ text: text, limit: defaultLimit });
  }, []);

  return (
    <>
      <body>
        <Nav
          limit={defaultLimit}
          onSearch={onSearch}
          webURL={webURL}
          text={text}
          setText={setText}
        />
        {loading && state.data.length < defaultLimit ? (
          <DisplayImage url={loadingURL} title="now loading ..." />
        ) : (
          <Trips
            limit={defaultLimit}
            data={state.data}
            webURL={webURL}
            loading={loading}
            onSearch={onSearch}
          />
        )}
        {state.data.length >= limit && (
          <LoadMore
            limit={limit}
            setLimit={setLimit}
            onSearch={onSearch}
            text={text}
          />
        )}
      </body>
    </>
  );
}

export default App;
