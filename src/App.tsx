import React from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";

import Memotest from "./screens/Memotest";
import Pokemon from "./screens/Pokemon";
import WordsPerMinute from "./screens/WordsPerMinute";

function App() {
  return (
    <Routes>
      <Route element={<Memotest />} path="/memotest" />
      <Route element={<Pokemon />} path="/pokemon" />
      <Route element={<WordsPerMinute />} path="/wpm" />
    </Routes>
  );
}

export default App;
