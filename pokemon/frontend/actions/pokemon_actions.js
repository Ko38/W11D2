import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePoke = payload => ({
  type: RECEIVE_POKE,
  payload
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon =>{
      return dispatch(receiveAllPokemon(pokemon)) 
    })
);

export const requestPoke = (pokeId) => (dispatch) => (
  APIUtil.fetchPoke(pokeId)
    .then(payload => dispatch(receivePoke(payload)))
);
