const actions = {
  addToCart: (book) => ({
    type: "CART:ADD_BOOK",
    payload: book,
  }),
  removeFromCart: (id) => ({
    type: "CART:REMOVE_BOOK",
    payload: id,
  }),
}

export default actions
