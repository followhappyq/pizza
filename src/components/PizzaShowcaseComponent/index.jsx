import React from "react"

import PizzaCard from "../../containers/PizzaCardContainer"
import "./style.scss"

const PizzaShowcaseComponent = ({ data }) => {
  return (
    <ul className="showcase">
      {data.map((item, index) => (
        <PizzaCard pizza={item} key={`${data.title}__${data.id}__${index}`} />
      ))}
    </ul>
  )
}

export default PizzaShowcaseComponent
