import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Trips from "./components/Trips";
import Header from "./components/Header";

const url = "http://localhost:9000/";

function App() {
  const [state, setState] = useState({ data: [] });
  const [text, setText] = useState("");

  async function onSearch(text) {
    const res = await fetch(url + "trips?q=" + text);
    const jsondata = await res.json();
    console.log(jsondata, text);
    setState((prevState) => {
      return { ...prevState, data: jsondata };
    });
  }

  useEffect(() => {
    onSearch("");
  }, []);

  return (
    <>
      <body>
        <div className="stickyHeader">
          <Header />
          <SearchBar onSearch={onSearch} text={text} setText={setText} />
        </div>
        <Trips data={state.data} setText={setText} onSearch={onSearch} />
      </body>
    </>
  );
}

export default App;
