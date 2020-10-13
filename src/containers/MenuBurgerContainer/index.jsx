import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setCategory } from "../../redux/actions/filter"
import categoryList from "../MenuContainer/categoryList"
import MenuBurger from "../../components/MenuBurgerComponent/"

const MenuBurgerContainer = () => {
  const [showMenu, setShowMenu] = useState(false)

  const dispatch = useDispatch()

  const category = useSelector(({ filter }) => filter.category)

  const onMenuClicked = () => {
    setShowMenu((prevState) => !prevState)
  }

  const onChangeCategory = (index) => {
    dispatch(setCategory(index))
  }

  return (
    <MenuBurger
      categoryList={categoryList}
      showMenu={showMenu}
      onMenuClicked={onMenuClicked}
      chosen={category}
      onChangeCategory={onChangeCategory}
    />
  )
}

export default MenuBurgerContainer
