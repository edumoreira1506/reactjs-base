import React from 'react';
import { Provider } from 'react-redux';
import List from '../components/List';
import Form from '../components/Form';

import store from '../store';

const App = () =>
  <Provider store={store}>
    <h1>Todos:</h1>
    <List />
    <Form />
  </Provider>

export default App;
