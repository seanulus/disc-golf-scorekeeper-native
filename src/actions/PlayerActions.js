import v4 from 'uuid';
import { SELECTED_PLAYER, NAME_CHANGED, PLAYER_CREATE } from './types';

export const selectPlayer = (playerId) => {
  return {
      type: SELECTED_PLAYER,
      payload: playerId
  };
};

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const playerCreate = (name) => {
  console.log(name)
  return {
    // dispatch({
      type: PLAYER_CREATE,
      payload: {
        name: name,
        scoreArray: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        id: v4()
      }
    // });
  };
};
