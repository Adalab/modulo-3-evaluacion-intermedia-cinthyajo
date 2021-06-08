import React, { useState } from "react";
import data from "../data/data.json";
import Pokemon from "./Pokemon";

const App = () => {
  const [pokemons, setPokemons] = useState(data);
  return (
    <div>
      <h1>Mi lista de pokemon</h1>
      <Pokemon pokemons={pokemons} />
    </div>
  );
};

export default App;
