import React, { useEffect, useState, useCallback } from "react"
import { useSelector } from "react-redux"
import { orderBy } from "lodash"

import PizzaShowCase from "../../components/PizzaShowcaseComponent/"

const PizzaShowCaseContainer = () => {
  const pizza = useSelector(({ pizza }) => pizza.pizza)
  const category = useSelector(({ filter }) => filter.category)
  const sortBy = useSelector(({ filter }) => filter.sortBy)
  const [pizzaState, setPizzaState] = useState(pizza)

  const onChangeCategory = useCallback(
    (category) => {
      setPizzaState(
        pizza.filter((item) => category === item.category || category === 0)
      )
    },
    [pizza]
  )

  const onChangeSortBy = useCallback(() => {
    setPizzaState((prevState) =>
      orderBy(prevState, sortBy.sort.description, sortBy.asc ? "asc" : "desc")
    )
  }, [sortBy])

  useEffect(() => {
    onChangeCategory(category)
  }, [category, onChangeCategory])

  useEffect(() => {
    setPizzaState(pizza)
  }, [pizza])

  useEffect(() => {
    onChangeSortBy()
  }, [sortBy, onChangeSortBy])

  return <PizzaShowCase data={pizzaState} />
}

export default PizzaShowCaseContainer
