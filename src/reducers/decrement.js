export default (state = 0, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
