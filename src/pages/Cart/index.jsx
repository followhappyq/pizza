import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { cartClear } from "../../redux/actions/cart"
import CartItemComponent from "../../components/CartItemComponent"
import { ReactComponent as CartIcon } from "./assets/cart-icon.svg"
import { ReactComponent as TrashIcon } from "./assets/trash-icon.svg"
import "./style.scss"

const CartPage = () => {
  const pizzaCart = useSelector(({ cart }) => cart.pizza)
  const dispatch = useDispatch()

  const cartClearHandler = () => {
    dispatch(cartClear())
  }

  return (
    <main className="cart-page">
      <div className="cart-page__wrapper">
        <div className="cart-page__header">
          <div className="cart-page__description">
            <CartIcon />
            <h2>Корзина</h2>
          </div>
          <div className="cart-page__clean">
            <TrashIcon />
            <span onClick={cartClearHandler}>Очистить корзину</span>
          </div>
        </div>
        <ul className="cart-page__list cart-list">
          {pizzaCart.map((item, index) => (
            <CartItemComponent
              key={`${item.id}__${index}__${item.title}`}
              pizza={item}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default CartPage
