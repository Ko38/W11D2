import { connect } from 'react-redux';
import { selectItems, selectAllPokemon } from '../../reducers/selectors';
import { requestPoke } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  return {
    poke: state.entities.pokemon[ownProps.match.params.id],
    items: selectItems(state)
  }
};

const mapDispatchToProps = dispatch => ({
  requestPoke: pokeId  => dispatch(requestPoke(pokeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);