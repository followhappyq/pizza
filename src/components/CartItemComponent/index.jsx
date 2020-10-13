import React from "react"

import "./style.scss"

const CartItemComponent = ({
  pizza,
  onClickPlus,
  onClickRemove,
  onClickMinus,
}) => {
  return (
    <li className="cart-list__item">
      <div className="cart-list__container">
        <img src={pizza.imageUrl} alt="pizza" />
        <div>
          <h4 className="cart-list__title">{pizza.title}</h4>
          <div className="cart-list__description">
            <span>
              {pizza.dough === "normal" ? "классическое " : "тонкое "}
            </span>
            тесто,
            <span> {pizza.size.size}</span> см.
          </div>
        </div>
      </div>
      <div className="cart-list__controller">
        <div
          className="cart-list__minus"
          onClick={onClickMinus.bind(null, pizza)}
        >
          -
        </div>
        <div className="cart-list__count">{pizza.count}</div>
        <div
          className="cart-list__plus"
          onClick={onClickPlus.bind(null, pizza)}
        >
          +
        </div>
      </div>
      <div className="cart-list__price">{pizza.size.price} BYN</div>
      <div
        className="cart-list__remove"
        onClick={onClickRemove.bind(null, pizza)}
      >
        x
      </div>
    </li>
  )
}

export default CartItemComponent
