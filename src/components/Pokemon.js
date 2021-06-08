//card de c/pokemon
import React from "react";

const Pokemon = (props) => {
  return (
    <div className="pokeCard">
      <img clasname="pokeImg src={props.pokemon.url}> /img>
      <h2 className="pokeTitle>{props.pokemons.name}</h2>
      <ul className="pokeDescription">
        <li>{props.pokemons.types}</li>
        <li>{props.pokemons.types}</li>
      </ul>
    </div>
  );
};

export default Pokemon;
