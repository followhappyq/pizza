import React from "react"

import "./style.scss"

const CartItemComponent = ({ pizza }) => {
  return (
    <li className="cart-list__item">
      <div className="cart-list__container">
        <img src={pizza.imageUrl} alt="pizza" />
        <div>
          <h4 className="cart-list__title">{pizza.title}</h4>
          <div className="cart-list__description">
            {pizza.dough === "normal" ? "классическое тесто" : "тонкое тесто"},{" "}
            {pizza.size.size} см.
          </div>
        </div>
      </div>
      <div className="cart-list__controller">
        <div className="cart-list__minus">-</div>
        <div className="cart-list__count">1</div>
        <div className="cart-list__plus">+</div>
      </div>
      <div className="cart-list__price">{pizza.size.price} BYN</div>
      <div className="cart-list__remove">x</div>
    </li>
  )
}

export default CartItemComponent
