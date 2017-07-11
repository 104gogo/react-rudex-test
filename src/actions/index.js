export const increment = () => { return { type: 'INCREMENT' } };
export const decrement = () => { return { type: 'DECREMENT' } };

export const wait = time => (dispatch, getState) => setTimeout(() => dispatch({ type: 'INCREMENT' }), time)
