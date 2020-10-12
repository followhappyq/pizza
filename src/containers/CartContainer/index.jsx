import React, { useState, useEffect, useCallback } from "react"
import { useSelector } from "react-redux"

import CartComponent from "../../components/CartComponent"

const CartContainer = () => {
  const [total, setTotal] = useState(0)
  const pizzaCart = useSelector(({ cart }) => cart.pizza)

  const onPizzaCartChange = useCallback(() => {
    setTotal(
      pizzaCart
        .reduce(
          (accumulator, currentValue) => accumulator + currentValue.size.price,
          0
        )
        .toFixed(2)
    )
  }, [pizzaCart])

  useEffect(() => {
    onPizzaCartChange()
  }, [pizzaCart, onPizzaCartChange])

  return <CartComponent total={total} cartCount={pizzaCart.length} />
}

export default CartContainer
