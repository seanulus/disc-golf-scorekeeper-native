import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import NewPlayerForm from './components/NewPlayerForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='home'>
          <Scene key='welcome' component={Welcome} title='RLLR' initial />
        </Scene>
        <Scene key='addPlayer'>
          <Scene key='newPlayer' component={NewPlayerForm} title='RLLR' inital />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
