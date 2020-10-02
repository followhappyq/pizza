import React from "react"
import classNames from "classnames"

import "./style.scss"

const SortPopupComponent = ({ data }) => {
  return (
    <ul className="sort-popup">
      {data.map((item) => (
        <li className={classNames("sort-popup__item", { "sort-popup__item--active": item.chosen })}>{item.text}</li>
      ))}
    </ul>
  )
}

export default SortPopupComponent
