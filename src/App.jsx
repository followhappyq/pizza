import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./components/HeaderComponent"
import Main from "./pages/Main"
import Cart from "./pages/Cart"
import "./style.scss"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path={["/"]} component={Main} />
        <Route exact path={["/cart"]} component={Cart} />
      </Switch>
    </div>
  )
}

export default App
