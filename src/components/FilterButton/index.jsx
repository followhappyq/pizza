import React from "react"
import classNames from "classnames"

import "./style.scss"

const FilterButton = ({ text, chosen, index, onChangeCategory }) => {
  return (
    <button
      className={classNames("filter-button", {
        "filter-button--active": chosen,
      })}
      onClick={onChangeCategory.bind(null, index)}
    >
      {text}
    </button>
  )
}

export default FilterButton
