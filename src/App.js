import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './Router';
import reducers from './reducers';

const store = createStore(reducers)

let unsubscribe = store.subscribe(() =>
  store.getState()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
