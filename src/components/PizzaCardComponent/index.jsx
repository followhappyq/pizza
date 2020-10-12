import React from "react"
import classNames from "classnames"

import Button from "../ButtonComponent"
import "./style.scss"

const PizzaCardComponent = ({
  pizza,
  onChangePizzaSize,
  size,
  dough,
  onDoughChange,
  addButtonHandler,
}) => {
  console.log(pizza.sizes[size].thin)
  return (
    <li className="pizza-card">
      <img src={pizza.imageUrl} alt="pizza" className="pizza-card__image" />
      <h3 className="pizza-card__title">{pizza.title}</h3>
      <div className="pizza-card__main">
        <div className="pizza-card__dough dough">
          <div
            className={classNames("pizza-card__thin", {
              "dough--active": dough === "thin" && pizza.sizes[size].thin,
            })}
            onClick={onDoughChange.bind(null, "thin")}
          >
            тонкое
          </div>
          <div
            className={classNames("pizza-card__normal", {
              "dough--active": dough === "normal",
            })}
            onClick={onDoughChange.bind(null, "normal")}
          >
            классика
          </div>
        </div>
        <div className="pizza-card__sizes">
          <div
            className={classNames("pizza-card__size", {
              "pizza-card__size--active": "22" === size,
            })}
            onClick={onChangePizzaSize.bind(null, "22")}
          >
            22 см.
          </div>
          <div
            className={classNames("pizza-card__size", {
              "pizza-card__size--active": "30" === size,
            })}
            onClick={onChangePizzaSize.bind(null, "30")}
          >
            30 см.
          </div>
          <div
            className={classNames("pizza-card__size", {
              "pizza-card__size--active": "36" === size,
            })}
            onClick={onChangePizzaSize.bind(null, "36")}
          >
            36 см.
          </div>
        </div>
      </div>
      <div className="pizza-card__description">
        <div className="pizza-card__price">{pizza.sizes[size].price} BYN</div>
        <Button count={0} addButtonHandler={addButtonHandler} />
      </div>
    </li>
  )
}

export default PizzaCardComponent
