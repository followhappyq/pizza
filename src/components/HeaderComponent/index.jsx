import React from "react"
import { Link } from "react-router-dom"

import Cart from "../../containers/CartContainer"
import { ReactComponent as LogoIcon } from "./icons/pizza.svg"
import "./style.scss"

const HeaderComponent = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo logo">
          <LogoIcon />
          <div className="logo__description">
            <h3 className="logo__title">React pizza</h3>
            <h4 className="logo__subtitle">Самая вкусная пицца</h4>
          </div>
        </div>
      </Link>

      <Link to="/cart">
        <Cart />
      </Link>
    </header>
  )
}

export default HeaderComponent
