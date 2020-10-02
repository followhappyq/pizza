const initialState = {
  items: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CART:ADD_BOOK":
      return {
        ...state,
        items: [...state.items, payload],
      }
    case "CART:REMOVE_BOOK":
      return {
        ...state,
        items: state.items.filter((obj) => obj.id !== payload),
      }

    default:
      return state
  }
}
