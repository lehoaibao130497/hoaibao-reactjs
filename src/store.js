import { createStore } from 'redux'

const initState = {
  loading: true,
  product: [],
  error: null
}

function Reducer1(state = initState, action) {
  switch(action.type) {
    case 'GET_PRODUCT_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
        product: action.data
      }
    case 'GET_PRODUCT_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return {...state}
  }
}

const store = createStore(Reducer1, {})

export default store