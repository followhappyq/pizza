import { types } from "../constant"

const initialState = {
  category: 0,
  sortBy: {
    asc: false,
    sort: {
      chosen: false,
      description: "popularity",
      text: "популярности",
    },
  },
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CATEGORY:
      return {
        ...state,
        category: payload,
      }

    case types.SET_SORT_BY:
      return {
        ...state,
        sortBy: payload,
      }

    default:
      return state
  }
}
