import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./components/HeaderComponent"
import Main from "./pages/Main"
import "./style.scss"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path={["/"]}>
          <Main />
        </Route>
      </Switch>
    </div>
  )
}

export default App
