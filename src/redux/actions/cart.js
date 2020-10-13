import { types } from "../constant"

export const addPizzaToCart = (pizza) => ({
  type: types.ADD_PIZZA_TO_CART,
  payload: pizza,
})

export const cartClear = () => ({
  type: types.CART_CLEAR,
})

export const removeFromCart = (pizza) => ({
  type: types.REMOVE_FROM_CART,
  payload: pizza,
})

export const minusOnePizza = (pizza) => ({
  type: types.MINUS_ONE_PIZZA,
  payload: pizza,
})
