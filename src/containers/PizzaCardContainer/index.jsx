import React, { useState } from "react"

import PizzaCard from "../../components/PizzaCardComponent"

const PizzaCardContainer = ({ pizza }) => {
  const [size, setSize] = useState("30")
  const [dough, setDough] = useState("normal")

  const onChangePizzaSize = (size) => {
    setSize(size)
  }

  const onDoughChange = (dough) => {
    setDough(dough)
  }

  return (
    <PizzaCard
      pizza={pizza}
      onChangePizzaSize={onChangePizzaSize}
      size={size}
      onDoughChange={onDoughChange}
      dough={dough}
    />
  )
}

export default PizzaCardContainer
