import React, { useState, useEffect } from "react";

const WORDS = [
  "abacus",
  "abdomen",
  "abdominal",
  "abide",
  "ability",
  "ablaze",
  "able",
  "abnormal",
  "abrasion",
  "abrasive",
  "abreast",
];

export default function WordsPerMinute() {
  const [word, setWord] = useState(
    () => WORDS[(Math.random() * WORDS.length) | 0]
  );
  const [characterCount, setCharacterCount] = useState(0);
  const [buffer, setBuffer] = useState("");
  const [time, setTime] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (buffer == word) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setCharacterCount((characterCount) => characterCount + word.length);
      setBuffer("");
    }
  }

  useEffect(() => {
    if (time !== 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);

      return () => clearTimeout(timeout);
    }
  }, [time]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        textAlign: "center",
      }}
    >
      {Boolean(time) && <h1 style={{ fontSize: 48 }}>{word}</h1>}
      <h2>Characters typed: {characterCount}</h2>
      <h3>Remaining time: {time}</h3>
      {time !== 0 ? (
        <form onSubmit={handleSubmit}>
          <input
            value={buffer}
            type="text"
            autoFocus
            onChange={(e) => setBuffer(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button onClick={() => setTime(60)}>Play</button>
      )}
    </div>
  );
}
