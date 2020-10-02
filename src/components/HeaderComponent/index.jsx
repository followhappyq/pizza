import React from "react"

import Cart from "../../containers/CartContainer"
import { ReactComponent as LogoIcon } from "./icons/pizza.svg"
import "./style.scss"

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__logo logo">
        <LogoIcon />
        <div className="logo__description">
          <h3 className="logo__title">React pizza</h3>
          <h4 className="logo__subtitle">Самая вкусная пицца</h4>
        </div>
      </div>
      <Cart />
    </header>
  )
}

export default HeaderComponent
