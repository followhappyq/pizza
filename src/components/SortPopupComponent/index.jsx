import React from "react"
import classNames from "classnames"

import "./style.scss"

const SortPopupComponent = ({ data, onSortCategoryChanged, sortCategory }) => {
  return (
    <ul className="sort-popup">
      {data.map((item, index) => (
        <li
          className={classNames("sort-popup__item", {
            "sort-popup__item--active": item.text === sortCategory.text,
          })}
          key={`${index}__${item.text}`}
          onClick={onSortCategoryChanged.bind(null, item)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export default SortPopupComponent
