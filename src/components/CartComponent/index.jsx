import React from "react"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"

import "./style.scss"

const CartComponent = ({ total, cartCount }) => {
  return (
    <div className="cart">
      <div className="cart__total">{total} BYN</div>
      <div className="cart__count">
        <CartIcon fontSize="small" />
        <span className="cart__number">{cartCount}</span>
      </div>
    </div>
  )
}

export default CartComponent
