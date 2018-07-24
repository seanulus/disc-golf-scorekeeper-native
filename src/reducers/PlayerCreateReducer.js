import { PLAYER_CREATE } from '../actions/types';
import update from 'immutability-helper';

const INITIAL_STATE = {
  playerList: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_CREATE:
      console.log(state.playerList)
      return {
                playerList: [
                    ...state.playerList,
                    action.payload
                ]
            }
    default:
      return state;
  }
}


// return update(state, {
//   playerList: {$push: [action.payload]}
// });
// import data from './PlayerList.json';
//
// export default () => data;
