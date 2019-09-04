import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, state, action.pokemon);
    case RECEIVE_POKE:
      let newState = Object.assign({}, state)
      newState[action.payload.pokemon.id] = action.payload.pokemon;
      return newState;
      // return state.entities.pokemon.filter(poke => poke.id === action.payload.pokemon.id);
    default:
      return state;
  }
}



export default pokemonReducer;