import { combineReducers } from 'redux';
import PlayerFormReducer from './PlayerFormReducer';

export default combineReducers ({
  playerForm: PlayerFormReducer
});
