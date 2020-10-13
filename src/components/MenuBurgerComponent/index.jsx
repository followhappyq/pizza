import React from "react"
import classNames from "classnames"

import BurgerSrc from "./icons/menu.png"
import "./style.scss"

const MenuBurgerComponent = ({
  categoryList,
  showMenu,
  onMenuClicked,
  chosen,
  onChangeCategory,
}) => {
  return (
    <div className="burger">
      <img
        src={BurgerSrc}
        alt="menu"
        className="burger__icon"
        onClick={onMenuClicked}
      />
      {showMenu && (
        <ul className="burger__menu">
          {categoryList.map((item, index) => (
            <li
              className={classNames("burger__category", {
                "burger__category--active": chosen === item.categoryNumber,
              })}
              key={`${index}__${item.category}`}
              onClick={onChangeCategory.bind(null, item.categoryNumber)}
            >
              {item.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MenuBurgerComponent
