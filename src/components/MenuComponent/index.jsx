import React from "react"
import classNames from "classnames"

import { ReactComponent as SortIcon } from "./icons/sort.svg"
import SortPopup from "../SortPopupComponent"
import Button from "../FilterButton"
import "./style.scss"

const MenuComponent = () => {
  const filters = [
    { filter: "Все", chosen: true },
    { filter: "Мясные", chosen: false },
    { filter: "Вегетарианская", chosen: false },
    { filter: "Гриль", chosen: false },
    { filter: "Острые", chosen: false },
    { filter: "Закрытые", chosen: false },
  ]

  const sortData = [
    { text: "популярности", chosen: true },
    { text: "цене", chosen: false },
    { text: "алфавиту", chosen: false },
  ]
  return (
    <div className="menu">
      <div className="menu__filters filters">
        {filters.map((item) => (
          <Button text={item.filter} chosen={item.chosen} />
        ))}
      </div>
      <div className="menu__sort sort">
        <SortIcon className={classNames("sort__arrow", { "sort__arrow--asc": false, "sort__arrow--desc": true })} />
        <span className="sort__description">Сортировка по: </span>
        <ul className="sort__list">
          <li>
            <span className="sort__chosen">популярности</span>
          </li>
          <li className="sort__popup">
            <SortPopup data={sortData} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuComponent
