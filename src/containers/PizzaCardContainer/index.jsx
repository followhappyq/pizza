import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { addPizzaToCart } from "../../redux/actions/cart"
import PizzaCard from "../../components/PizzaCardComponent"

const PizzaCardContainer = ({ pizza }) => {
  const [size, setSize] = useState("30")
  const [dough, setDough] = useState("normal")

  const dispatch = useDispatch()

  const onChangePizzaSize = (size) => {
    setSize(size)
  }

  const onDoughChange = (dough) => {
    if (pizza.sizes[size].thin) {
      setDough(dough)
    }
    if (!pizza.sizes[size].thin && size === "22") {
      setDough("normal")
    }
  }

  const addButtonHandler = () => {
    const currentPizza = {
      id: pizza.id,
      title: pizza.title,
      size: pizza.sizes[size],
      composition: pizza.composition,
      imageUrl: pizza.imageUrl,
      dough: dough,
    }
    dispatch(addPizzaToCart(currentPizza))
  }

  useEffect(() => {
    if (dough === "thin" && size === "22") {
      setDough("normal")
    }
  }, [dough, size])

  return (
    <PizzaCard
      pizza={pizza}
      onChangePizzaSize={onChangePizzaSize}
      size={size}
      onDoughChange={onDoughChange}
      dough={dough}
      addButtonHandler={addButtonHandler}
    />
  )
}

export default PizzaCardContainer
