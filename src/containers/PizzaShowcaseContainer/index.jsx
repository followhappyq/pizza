import React, { useEffect, useState, useCallback } from "react"
import { useSelector } from "react-redux"

import PizzaShowCase from "../../components/PizzaShowcaseComponent/"

const PizzaShowCaseContainer = () => {
  const pizza = useSelector(({ pizza }) => pizza.pizza)
  const category = useSelector(({ filter }) => filter.category)
  const [pizzaState, setPizzaState] = useState(pizza)

  const onChangeCategory = useCallback(
    (category) => {
      setPizzaState(
        pizza.filter((item) => category === item.category || category === 0)
      )
    },
    [pizza]
  )

  useEffect(() => {
    onChangeCategory(category)
  }, [category, onChangeCategory])

  useEffect(() => {
    setPizzaState(pizza)
  }, [pizza])

  return <PizzaShowCase data={pizzaState} />
}

export default PizzaShowCaseContainer
