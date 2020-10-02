import React from "react"
import classNames from "classnames"

import "./style.scss"

const FilterButton = ({ text, chosen }) => {
  return <button className={classNames("filter-button", { "filter-button--active": chosen })}>{text}</button>
}

export default FilterButton
