import { types } from "../constant"

export const setCategory = (category) => ({
  type: types.SET_CATEGORY,
  payload: category,
})

export const setSortBy = ({ sort, asc }) => ({
  type: types.SET_SORT_BY,
  payload: { sort, asc },
})
