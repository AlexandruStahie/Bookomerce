const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SEARCH_TEXT":
      console.log("test");
      return Object.assign({}, state, {
        globalSearch: action.payload
      });

    default:
      return state;
  }
};

export default searchReducer;
