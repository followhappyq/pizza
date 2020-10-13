import { types } from "../constant"
import { pizzaCompare } from "../helpers/cartHelpers"

const initialState = {
  pizza: [
    {
      composition: ["Сыр моцарелла", "Соус карри", "Баварские колбаски"],
      dough: "normal",
      id: 1,
      imageUrl:
        "https://images.dominos.by/media/dominos/osg/api/2019/10/18/kolbaski_karri_small.png",
      size: { size: 30, price: 22.39, thin: true },
      title: "Колбаски Карри",
      count: 1,
    },
  ],
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
