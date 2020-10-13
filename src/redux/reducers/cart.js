import { types } from "../constant"
import { pizzaCompare } from "../helpers/cartHelpers"

const initialState = {
  pizza: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_PIZZA_TO_CART:
      if (
        state.pizza.some((item) => {
          if (pizzaCompare(item, payload)) {
            return true
          }
          return false
        })
      ) {
        return {
          ...state,
          pizza: state.pizza.filter((item) => {
            if (pizzaCompare(item, payload)) {
              return {
                composition: item.composition,
                dough: item.dough,
                id: item.id,
                imageUrl: item.imageUrl,
                size: item.size,
                title: item.title,
                count: ++item.count,
              }
            }
            return item
          }),
        }
      }

      return {
        ...state,
        pizza: [...state.pizza, payload],
      }

    case types.CART_CLEAR:
      return {
        ...state,
        pizza: [],
      }

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        pizza: state.pizza.filter((item) => !pizzaCompare(item, payload)),
      }

    case types.MINUS_ONE_PIZZA:
      return {
        ...state,
        pizza: state.pizza.map((item) =>
          pizzaCompare(item, payload)
            ? {
                composition: item.composition,
                dough: item.dough,
                id: item.id,
                imageUrl: item.imageUrl,
                size: item.size,
                title: item.title,
                count: --item.count,
              }
            : item
        ),
      }

    default:
      return state
  }
}
