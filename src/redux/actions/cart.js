import { types } from "../constant"

export const addPizzaToCart = (pizza) => ({
  type: types.ADD_PIZZA_TO_CART,
  payload: pizza,
})
