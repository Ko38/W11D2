export const fetchAllPokemon = () => (
  $.ajax({
    url: '/api/pokemon',
    method: 'GET'
  })
)

export const fetchPoke = (pokeId) => {
  return $.ajax({
    url: `/api/pokemon/${pokeId}`,
    method: 'GET'
  }); 
}