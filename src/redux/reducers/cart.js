import { types } from "../constant"

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
    },
  ],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_PIZZA_TO_CART:
      return {
        ...state,
        pizza: [...state.pizza, payload],
      }

    case types.CART_CLEAR:
      return {
        ...state,
        pizza: [],
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
