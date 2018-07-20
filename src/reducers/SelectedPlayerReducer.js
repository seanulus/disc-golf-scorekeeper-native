export default (state = null, action) => {
  switch (action.type) {
    case 'selected_player':
      return action.payload
    default:
      return state;
  }
};
