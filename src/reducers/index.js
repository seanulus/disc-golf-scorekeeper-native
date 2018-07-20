import { combineReducers } from 'redux';
import PlayerFormReducer from './PlayerFormReducer';
import SelectedPlayerReducer from './SelectedPlayerReducer';

export default combineReducers ({
  players: PlayerFormReducer,
  selectedPlayerId: SelectedPlayerReducer
});
