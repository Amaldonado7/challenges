import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Navbar from "./Navbar";
import Home from "./screens/Home";
import Memotest from "./screens/Memotest";
import Pokemon from "./screens/Pokemon";
import WordsPerMinute from "./screens/WordsPerMinute";

function App() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          // display: "grid",
          // gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          // backgroundColor: "#282c34",
          // minHeight: "100vh",
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memotest" element={<Memotest />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/wpm" element={<WordsPerMinute />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
