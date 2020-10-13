import React, { useState, useEffect, useCallback } from "react"
import { useSelector } from "react-redux"

import CartComponent from "../../components/CartComponent"

const CartContainer = () => {
  const [total, setTotal] = useState(0)
  const pizzaCart = useSelector(({ cart }) => cart.pizza)
  const [cartCount, setCartCount] = useState(pizzaCart.length)

  const onPizzaCartChange = useCallback(() => {
    setTotal(
      pizzaCart
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue.size.price * currentValue.count
        }, 0)
        .toFixed(2)
    )

    setCartCount(
      pizzaCart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.count
      }, 0)
    )
  }, [pizzaCart])

  useEffect(() => {
    onPizzaCartChange()
  }, [pizzaCart, onPizzaCartChange])

  return <CartComponent total={total} cartCount={cartCount} />
}

export default CartContainer
