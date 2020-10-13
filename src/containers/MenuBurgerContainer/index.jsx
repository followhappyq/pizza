import React, { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setCategory } from "../../redux/actions/filter"
import categoryList from "../MenuContainer/categoryList"
import MenuBurger from "../../components/MenuBurgerComponent/"

const MenuBurgerContainer = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)

  const dispatch = useDispatch()

  const category = useSelector(({ filter }) => filter.category)

  const onMenuClicked = () => {
    setShowMenu((prevState) => !prevState)
  }

  const onChangeCategory = (index) => {
    dispatch(setCategory(index))
  }

  const useOutsideMenuClick = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onMenuClicked()
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }

  useOutsideMenuClick(menuRef)

  return (
    <MenuBurger
      categoryList={categoryList}
      showMenu={showMenu}
      onMenuClicked={onMenuClicked}
      chosen={category}
      onChangeCategory={onChangeCategory}
      menuRef={menuRef}
    />
  )
}

export default MenuBurgerContainer
