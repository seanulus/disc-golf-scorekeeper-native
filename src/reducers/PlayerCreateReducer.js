import v4 from 'uuid';
import { PLAYER_CREATE } from '../actions/types';

const INITIAL_STATE = {
  players: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_CREATE:
      console.log(players)
      return { ...state, players: players.push(action.payload) };
    default:
      return state;
  }
}



// import data from './PlayerList.json';
//
// export default () => data;
