/**
 * REDUX API
 */
const redux = []

let globalState = {}




const _store = {
  getState: function() {
    return globalState
  },
  dispatch: dispatch
}


function dispatch(action) {
  const newState = reducers(action)
  globalState = newState
}

function createStore() {
  globalState = reducers()
  return _store
}

// create reducer boilerplate
function reducers(action) {
  const state = _store.getState()
  return {
    ui: uiReducer(state.ui, action),
  }
}


/*
 * REDUCERS
 */
const initialUi = {
  page: 'home'
}


function uiReducer(state = initialUi, action = {}) {
  switch(action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload
      }

    case 'RECEIVE_FOOD':
      return {
        ...state,
        food: action.payload
      }

    default:
      return state
  }
}

const ac =
{
  type: 'SET_PAGE',
    payload: 'home'
}


/**
 * ACTIONS
 */
function setPageAction(page) {
  return {
    type: 'SET_PAGE',
    payload: page
  }
}

function receiveFood(food) {
  return {
    type: 'RECEIVE_FOOD',
    payload: food
  }
}




function getCookedFood(food) {
  return function(dispatch, getState) {
    fakeApi(food, (res) => {
      dispatch(receiveFood(res))
    })
  }
}

/**
 * UTILS
 */
function fakeApi(arg, cb) {
  setTimeout(() => {
    cb('COOKED: ' + arg)
  }, 1000)
}

/**
 * ENHANCER
 */
function logger(action) {
  if (typeof action !== 'function') {
    console.log('LOG ACTION:', action)
  }
}

_store.dispatch = function(action) {
  // add logger
  logger(action)

  // add thunk
  if (typeof action === 'function') {
    return action(dispatch, _store.getState)
  }

  // run all the functions that have been subscribed

  return dispatch(action)
}


// initialize - createStore
const store = createStore()


// initial state
console.log(store.getState())

store.dispatch(setPageAction('player'))

// console.log(store.getState())
//
store.dispatch(getCookedFood('steak'))




//
// setTimeout(() => {
//   console.log(store.getState())
// }, 1500)








