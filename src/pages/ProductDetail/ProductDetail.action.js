export const PRODUCT_DETAIL_REQUEST = "PRODUCT_DETAIL_REQUEST"
export const PRODUCT_DETAIL_SUCCESS = "PRODUCT_DETAIL_SUCCESS"
export const PRODUCT_DETAIL_FAILURE = "PRODUCT_DETAIL_FAILURE"


export function productDetailRequestAction() {
  return {
    type: PRODUCT_DETAIL_REQUEST
  }
}

export function productDetailSuccessAction(data) {
  return {
    type: PRODUCT_DETAIL_SUCCESS,
    data
  }
}

export function productDetailFailureAction(error) {
  return {
    type: PRODUCT_DETAIL_FAILURE,
    error: error
  }
}