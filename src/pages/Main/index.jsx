import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchPizza } from "../../redux/actions/pizza"
import Menu from "../../containers/MenuContainer"
import PizzaShowcase from "../../containers/PizzaShowcaseContainer"

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPizza())
  }, [dispatch])

  return (
    <main className="main">
      <Menu />
      <PizzaShowcase />
    </main>
  )
}

export default Main
