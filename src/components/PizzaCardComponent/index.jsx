import React from "react"

import Button from "../ButtonComponent"
import "./style.scss"

const PizzaCardComponent = ({ pizza }) => {
  return (
    <li className="pizza-card">
      <img src={pizza.imageUrl} alt="pizza" className="pizza-card__image" />
      <h3 className="pizza-card__title">{pizza.title}</h3>
      <div className="pizza-card__main">
        <div className="pizza-card__dough dough">
          <div className="pizza-card__thin">тонкое</div>
          <div className="pizza-card__normal dough--active">классика</div>
        </div>
        <div className="pizza-card__sizes">
          <div className="pizza-card__size ">22 см.</div>
          <div className="pizza-card__size pizza-card__size--active">
            30 см.
          </div>
          <div className="pizza-card__size">36 см.</div>
        </div>
      </div>
      <div className="pizza-card__description">
        <div className="pizza-card__price">{pizza.sizes[`30`].price} BYN</div>
        <Button count={0} />
      </div>
    </li>
  )
}

export default PizzaCardComponent
