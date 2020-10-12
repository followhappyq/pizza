import { types } from "../constant"

export const setCategory = (category) => ({
  type: types.SET_CATEGORY,
  payload: category,
})
