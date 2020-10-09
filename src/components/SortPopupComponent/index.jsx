import React from "react"
import classNames from "classnames"

import "./style.scss"

const SortPopupComponent = ({ data }) => {
  return (
    <ul className="sort-popup">
      {data.map((item, index) => (
        <li
          className={classNames("sort-popup__item", { "sort-popup__item--active": item.chosen })}
          key={`${index}__${item.text}`}
        >
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export default SortPopupComponent
