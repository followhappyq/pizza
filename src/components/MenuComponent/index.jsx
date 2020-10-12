import React from "react"
import classNames from "classnames"

import { ReactComponent as SortIcon } from "./icons/sort.svg"
import SortPopup from "../SortPopupComponent"
import Button from "../FilterButton"
import "./style.scss"

const category = [
  { category: "Все", chosen: true },
  { category: "Вегетарианская", chosen: false },
  { category: "Острые", chosen: false },
  { category: "Закрытые", chosen: false },
]

const sortData = [
  { text: "популярности", chosen: true },
  { text: "цене", chosen: false },
  { text: "алфавиту", chosen: false },
]

const MenuComponent = ({ onChangeCategory }) => {
  return (
    <div className="menu">
      <div className="menu__filters filters">
        {category.map((item, index) => (
          <Button
            key={`${index}__${item.category}`}
            text={item.category}
            chosen={item.chosen}
            index={index}
            onChangeCategory={onChangeCategory}
          />
        ))}
      </div>
      <div className="menu__sort sort">
        <SortIcon
          className={classNames("sort__arrow", {
            "sort__arrow--asc": false,
            "sort__arrow--desc": true,
          })}
        />
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
