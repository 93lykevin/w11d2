import React from 'react';
import pokemonReducer from '../../reducers/pokemon_reducer';
import { Link } from 'react-router-dom';

 class PokemonIndexItem extends React.Component {
  render() {
    return (
      <Link to={`/pokemon/${this.props.poke.id}`}>
        <li>
          <h2>{this.props.poke.name}</h2>
          <img src={this.props.poke.image_url} />
        </li>
      </Link>
    )
  }
}



export default PokemonIndexItem;