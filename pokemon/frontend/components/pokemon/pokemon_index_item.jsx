import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  const { poke } = props;
  return (
    <li key={poke.id}>
      <Link to="/pokemon/:pokemonId">
        {poke.name}
        <img src={poke.image_url}></img>
      </Link>
    </li>
  )
};

export default PokemonIndexItem;