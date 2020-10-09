import React from "react"
import data from "../../data/pizza.json"

import PizzaShowCase from "../../components/PizzaShowcaseComponent/"

const PizzaShowCaseContainer = () => {
  return <PizzaShowCase data={data} />
}

export default PizzaShowCaseContainer
