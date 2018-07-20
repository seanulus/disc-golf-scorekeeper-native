import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='home'>
          <Scene key='welcome' component={Welcome} title='DGSK' initial />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
