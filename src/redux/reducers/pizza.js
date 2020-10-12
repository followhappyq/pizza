import { types } from "../constant"

const initialState = {
  pizza: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PIZZA:
      return {
        ...state,
        pizza: payload,
      }

    default:
      return state
  }
}
