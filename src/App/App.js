import React from 'react';
import { Provider } from 'react-redux';
import Card from '../Card/Card'

import AppStyles from './AppStyles'

import { data } from '../data/data'
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppStyles className="App">
        <Card 
          data={data}
          title="Fuzzy Food Search"
        />
      </AppStyles>
    </Provider>
  );
}

export default App;
