import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import NewPlayerForm from './components/NewPlayerForm';
import PlayerList from './components/PlayerList';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: 'grey'}} titleStyle={{ color: 'white' }} navBarButtonColor={{ 'transparent' }}>
      <Scene key='root' hideNavBar>
        <Scene key='home'>
          <Scene key='welcome' component={Welcome} title='RLLR' initial />
        </Scene>
        <Scene key='addPlayer'>
          <Scene key='newPlayer' component={NewPlayerForm} title='RLLR' inital />
          <Scene key='playerList' component={PlayerList} title='RLLR' />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
