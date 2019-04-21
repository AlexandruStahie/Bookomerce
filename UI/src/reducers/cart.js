const cartReducer = (state = [], action) => {
  if (action.payload === null || action.payload === undefined) {
    return state;
  }

  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      const firstMatchIndex = state.map(e => e.id).indexOf(action.payload.id);
      return state.filter((item, index) => index !== firstMatchIndex);
    case "REMOVE_ITEM_TYPE":
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartReducer;
