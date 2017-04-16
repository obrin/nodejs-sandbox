function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)


  return function combine(state = {}, action) {
    let hasChanged = false
    const nextState = {}
    for(let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }

    return hasChanged ? nextState : state
  }
}


function createStore(reducer, preloadedState, enhancer) {
  if(typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function')
    }

    return enhancer(createStore)(reducer, preloadedState)
  }
}
