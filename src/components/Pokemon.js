import React from "react";

const Pokemon = (props) => {
  const typesList = props.type.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <div>
      <img src={props.url} alt={props.name} />
      <h3>{props.name}</h3>
      <ul>{typesList}</ul>
    </div>
  );
};

export default Pokemon;
