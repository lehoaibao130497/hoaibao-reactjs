import * as actionTypes from './Main.action.js'

const initState = {
  products: [],
  loading: false,
  error: null
}

function ProductReducer(state = initState, action) {
  switch(action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.data
      }
    
    case actionTypes.PRODUCT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default ProductReducer