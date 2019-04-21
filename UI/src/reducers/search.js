const searchReducer = (state = {}, action) => {
  if (action.payload === null || action.payload === undefined) {
    return state;
  }

  switch (action.type) {
    case "ADD_SEARCH_TEXT":
      return Object.assign({}, state, {
        globalSearch: action.payload
      });

    default:
      return state;
  }
};

export default searchReducer;
