import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import categoryList from "./categoryList"
import { setCategory, setSortBy } from "../../redux/actions/filter"
import MenuComponent from "../../components/MenuComponent"

const MenuContainer = () => {
  const [asc, setAsc] = useState(false)
  const [sortCategory, setSortCategory] = useState({
    text: "популярности",
    description: "popularity",
  })

  const dispatch = useDispatch()

  const category = useSelector(({ filter }) => filter.category)

  const onChangeCategory = (index) => {
    dispatch(setCategory(index))
  }

  const onSortClicked = () => {
    setAsc((prevState) => !prevState)
  }

  const onSortCategoryChanged = (sort) => {
    setSortCategory(sort)
  }

  useEffect(() => {
    dispatch(setSortBy({ sort: sortCategory, asc: asc }))
  }, [asc, sortCategory, dispatch])

  return (
    <MenuComponent
      onChangeCategory={onChangeCategory}
      category={category}
      onSortClicked={onSortClicked}
      asc={asc}
      onSortCategoryChanged={onSortCategoryChanged}
      sortCategory={sortCategory}
      categoryList={categoryList}
    />
  )
}

export default MenuContainer
