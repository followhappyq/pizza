import { types } from "../constant"

const initialState = {
  category: 0,
  sortBy: {
    type: "popular",
    order: "desc",
  },
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CATEGORY:
      return {
        ...state,
        category: payload,
      }

    default:
      return state
  }
}
