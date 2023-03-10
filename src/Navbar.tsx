import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 25,
      }}
    >
      <Link to="/"> Home </Link>
      <Link to="/memotest"> Memotest </Link>
      <Link to="/pokemon"> Pokemon </Link>
      <Link to="/wpm"> WordsPerMinute </Link>
    </div>
  );
}
