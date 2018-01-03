export default (state = null, action) => {
  switch (action.type) {
    case 'select_libary':
      return action.payload;
    default:
      return state;
  }
};
