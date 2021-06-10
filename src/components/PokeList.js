import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const pokemonesList = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Pokemon name={pokemon.name} url={pokemon.url} type={pokemon.types} />
      </li>
    );
  });
  return <ul>{pokemonesList}</ul>;
};

export default PokeList;
