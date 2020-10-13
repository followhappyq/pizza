import React from "react"
import classNames from "classnames"

import MenuBurger from "../../containers/MenuBurgerContainer"
import SortPopup from "../SortPopupComponent"
import Button from "../FilterButton"
import { ReactComponent as SortIcon } from "./icons/sort.svg"
import "./style.scss"

const sortData = [
  { text: "популярности", chosen: true, description: "popularity" },
  { text: "цене", chosen: false, description: "price" },
  { text: "алфавиту", chosen: false, description: "title" },
]

const MenuComponent = ({
  onChangeCategory,
  category,
  onSortClicked,
  asc,
  onSortCategoryChanged,
  sortCategory,
  categoryList,
}) => {
  return (
    <div className="menu">
      <div className="menu__burger burger">
        <MenuBurger />
      </div>
      <div className="menu__filters filters">
        {categoryList.map((item, index) => (
          <Button
            key={`${index}__${item.category}`}
            text={item.category}
            category={item.categoryNumber}
            index={index}
            onChangeCategory={onChangeCategory}
            chosen={category}
          />
        ))}
      </div>
      <div className="menu__sort sort">
        <SortIcon
          className={classNames("sort__arrow", {
            "sort__arrow--asc": asc,
            "sort__arrow--desc": !asc,
          })}
          onClick={onSortClicked}
        />
        <span className="sort__description">Сортировка по: </span>
        <ul className="sort__list">
          <li>
            <span className="sort__chosen">{sortCategory.text}</span>
          </li>
          <li className="sort__popup">
            <SortPopup
              data={sortData}
              onSortCategoryChanged={onSortCategoryChanged}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuComponent
