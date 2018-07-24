import { combineReducers } from 'redux';
import PlayerCreateReducer from './PlayerCreateReducer';
import SelectedPlayerReducer from './SelectedPlayerReducer';
import PlayerNameReducer from './PlayerNameReducer';

export default combineReducers ({
  players: PlayerCreateReducer,
  selectedPlayerId: SelectedPlayerReducer,
  playerName: PlayerNameReducer
});
