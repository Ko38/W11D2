export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
}

export const selectItems = (state) => {
  const items = Object.values(state.entities.items);

  return items;
  // return items
  //   .filter(item => item.pokemon_id === pokeId)
  //   .map(poke => state.entities.items[poke.pokeId]);
};


