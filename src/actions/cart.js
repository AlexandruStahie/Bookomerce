export function add(value) {
  return {
    type: "ADD",
    payload: value
  };
}

export function remove(value) {
  return {
    type: "REMOVE",
    payload: value
  };
}

export function deleteItemType(value) {
  return {
    type: "REMOVE_ITEM_TYPE",
    payload: value
  };
}
