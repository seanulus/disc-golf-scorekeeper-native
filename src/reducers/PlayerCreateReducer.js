import { PLAYER_CREATE, DECREMENT_SCORE } from '../actions/types';
import update from 'immutability-helper';

const INITIAL_STATE = {
  playerList: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_CREATE:
    return update(state, {
      playerList: {$push: [action.payload]}
    });
    case DECREMENT_SCORE:
      return update(state, {
        playerList: {$apply: action.payload}
      });
    default:
      return state;
  }
}

// {
//   playerList: [
//    ...state.playerList.scoreArray, action.payload
// ]
// }

// return {
//           playerList: [
//               ...state.playerList,
//               action.payload
//           ]
//       }

// import data from './PlayerList.json';
//
// export default () => data;
