import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Router from './Router';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(ReduxThunk))

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
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
