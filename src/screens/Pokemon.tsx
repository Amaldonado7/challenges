import React, { useState } from "react";

const POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "squirtle",
  "wartortle",
  "blastoise",
  "charmander",
  "charmeleon",
  "charizard",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function Pokemon() {
  const [hasWon, toggleWon] = useState(false);

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();

    const { pokemon } = event.currentTarget;

    if (pokemon.value == POKEMONS[MATCH]) {
      toggleWon(true);
      alert("You won!");
    }
  }

  console.log(handleSubmit);

  return (
    <div>
      <img
        height={512}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : "brightness(0)",
        }}
        width={512}
      />
      {hasWon ? (
        <button style={{ width: "100%" }} onClick={() => location.reload()}>
          Play again
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="pokemon" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
