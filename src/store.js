import { createStore } from 'redux'

const initState = {
  hoVaTen: "ABC",
  soTienDangCo: 200000,
  product: {}
}

function Reducer1(state = initState, action) {
  // if(action.type === "GUI_TIEN") {
  //   return {
  //     ...state,
  //     soTienDangCo: state.soTienDangCo + action.data
  //   }
  // }

  // if(action.type === 'RUT_TIEN') {
  //   return {
  //     ...state,
  //     soTienDangCo: state.soTienDangCo - action.data
  //   }
  // } 

  // return {...state}
  switch(action.type) {
    case 'GUI_TIEN':
      return {
        ...state,
        soTienDangCo: state.soTienDangCo + action.data
      }
    case 'RUT_TIEN':
      return {
        ...state,
        soTienDangCo: state.soTienDangCo - action.data
      }
    case 'DONG_TAI_KHOAN':
      return {
        ...state,
        soTienDangCo: 0
      }
      case 'ADD_PRODUCT':
        return {
          ...state,
          product: action.data
        }
    default:
      return {...state}
  }
}

const store = createStore(Reducer1, {})

export default store