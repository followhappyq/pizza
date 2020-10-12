import React from "react"
import classNames from "classnames"

import { ReactComponent as SortIcon } from "./icons/sort.svg"
import SortPopup from "../SortPopupComponent"
import Button from "../FilterButton"
import "./style.scss"

const categoryList = [
  { category: "Все", categoryNumber: 0 },
  { category: "Вегетарианская", categoryNumber: 1 },
  { category: "Острые", categoryNumber: 2 },
  { category: "Закрытые", categoryNumber: 3 },
]

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
}) => {
  return (
    <div className="menu">
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
