import React from 'react';
import pokemonReducer from '../../reducers/pokemon_reducer';


class PokemonDetail extends React.Component {
  componentDidMount() {
    console.log("hello from mount")
    this.props.requestOnePokemon(this.props.poke.id);
  }

  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.poke.image_url}/>
      </div>
    )
  }
}

export default PokemonDetail;