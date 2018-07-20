export const selectPlayer = (playerId) => {
  return {
      type: 'selected_player',
      payload: playerId
  };
};
