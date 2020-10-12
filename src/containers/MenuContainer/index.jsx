import React from "react"
import { useDispatch } from "react-redux"

import { setCategory } from "../../redux/actions/filter"
import MenuComponent from "../../components/MenuComponent"

const MenuContainer = () => {
  const dispatch = useDispatch()

  const onChangeCategory = (index) => {
    dispatch(setCategory(index))
  }

  return <MenuComponent onChangeCategory={onChangeCategory} />
}

export default MenuContainer
