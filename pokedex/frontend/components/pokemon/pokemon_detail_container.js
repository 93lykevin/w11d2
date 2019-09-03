import { connect } from 'react-redux';
import { requestOnePokemon, receiveOnePokemon } from '../../actions/pokemon_action';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => ({
  // piece of state that container subscribes to
  pokemon: state.entities.pokemon[ownProps.match.params.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestOnePokemon: () => dispatch(requestOnePokemon(ownProps.match.params.id)), 
  // receiveOnePokemon: (pokemon) => dispatch(receiveOnePokemon(pokemon)) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);