import { types } from "../constant"

const initialState = {
  pizza: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_PIZZA_TO_CART:
      return {
        ...state,
        pizza: [...state.pizza, payload],
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
