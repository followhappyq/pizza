import { combineReducers } from "redux"

import cart from "./cart"
import filter from "./filter"
import pizza from "./pizza"

const rootReducer = combineReducers({
  cart,
  filter,
  pizza,
})

export default rootReducer
