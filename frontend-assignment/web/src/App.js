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
  const [loading, setLoading] = useState(false);

  async function onSearch(text) {
    setLoading(true);
    try {
      const res = await fetch(`${dbURL}api/trips?keyword=${text}`);
      const JSONdata = await res.json();
      setState((prevState) => {
        return { ...prevState, data: JSONdata };
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
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
        {loading && <center style={{ padding: 20 }}>loading...</center>}
        <Trips data={state.data} webURL={webURL} loading={loading} />
      </body>
    </>
  );
}

export default App;
