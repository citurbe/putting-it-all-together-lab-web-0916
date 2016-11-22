export const createStore = (reducer) => {
  let state;
  let listeners = []

  const getState = () => {
    return state
  }

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({})

  return {getState: getState, subscribe: subscribe, dispatch:dispatch}

}
