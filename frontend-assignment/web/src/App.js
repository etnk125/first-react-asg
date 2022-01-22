import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Trips from "./components/Trips";

function App() {
  const dbURL = "http://localhost:9000/";
  const webURL = "http://localhost:3000/";
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const keyword = searchParams.get("keyword");
  const [state, setState] = useState({ data: [] });
  const [text, setText] = useState(keyword ? keyword : "");

  async function onSearch(text) {
    const res = await fetch(`${dbURL}api/trips?keyword=${text}`);
    const JSONdata = await res.json();
    console.log(JSONdata, text);
    setState((prevState) => {
      return { ...prevState, data: JSONdata };
    });
  }

  useEffect(() => {
    onSearch(text);
  }, []);

  return (
    <>
      <body>
        <Nav
          onSearch={onSearch}
          webURL={webURL}
          text={text}
          setText={setText}
        />
        <Trips data={state.data} webURL={webURL} />
      </body>
    </>
  );
}

export default App;
