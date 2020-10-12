import { types } from "../constant"
import pizza from "../../data/pizza.json"

export const fetchPizza = () => ({
  type: types.FETCH_PIZZA,
  payload: pizza,
})
