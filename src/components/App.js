import React, { useState } from "react";
import "../stylesheet/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";

const App = () => {
  const [pokemons] = useState(data);
  return (
    <>
      <header>
        <h1>Mi lista de pokemon</h1>
      </header>
      <main>
        <PokeList pokemons={pokemons} />
      </main>
    </>
  );
};

export default App;
