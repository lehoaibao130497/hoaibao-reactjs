import axios from 'axios'
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"


export function loginRequestAction() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccessAction(token) {
  return {
    type: LOGIN_SUCCESS,
    data: token
  }
}

export function loginFailureAction(error) {
  return {
    type: LOGIN_FAILURE,
    error: error
  }
}

export function loginAction(data, history) {
  return async (dispatch) => {
    dispatch(loginRequestAction())
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signIn",
        data
      });
  
      console.log(result.data);
      localStorage.setItem("token", result.data.accessToken)
      if(history.location.state && history.location.state.from.pathname) {
        history.push(history.location.state.from.pathname)
      } else {
        history.push('/')
      }
      console.log(result.data, "result.data")
      dispatch(loginSuccessAction(result.data.accessToken))
    } catch (error) {
      console.log(error, "errorrrr")
      dispatch(loginFailureAction(error.response.data.message))
    }
  }
}