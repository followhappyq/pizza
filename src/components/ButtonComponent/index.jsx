import React from "react"

import "./style.scss"

const ButtonComponent = ({ count, addButtonHandler }) => {
  return (
    <div className="button" onClick={addButtonHandler}>
      <div className="button__text">+ Добавить</div>
      <div className="button__count">{count > 0 ? count : null}</div>
    </div>
  )
}

export default ButtonComponent
