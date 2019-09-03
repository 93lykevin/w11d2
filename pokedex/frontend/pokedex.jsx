import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchOnePokemon } from './util/api_util';
import { requestOnePokemon, requestAllPokemon } from './actions/pokemon_action';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from "react-router-dom";


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  window.fetchOnePokemon = fetchOnePokemon;
  window.requestOnePokemon = requestOnePokemon;

  ReactDOM.render(<Root store={store} />, root);
});