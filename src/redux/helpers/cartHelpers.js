export const pizzaCompare = (item, payload) => {
  return (
    item.id + item.title + item.dough + item.size.size ===
    payload.id + payload.title + payload.dough + payload.size.size
  )
}
