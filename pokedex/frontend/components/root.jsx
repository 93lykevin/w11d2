import React from 'react';
import { Provider } from 'react-redux';

const Root = ({store}) => (
  <Provider store={store}>
    <div>This is the root</div>
  </Provider>
);

export default Root;