import React, {Component} from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <ImageBackground source={require('./src/assets/images/background.jpg')} style={styles.backgroundImage}>
          <Router />
        </ImageBackground>
      </Provider>
    );
  }
}
