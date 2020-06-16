import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ThemeContextCustom } from './hooks/useBgMode'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from './components/Loading'
import ProtectedRoute from './components/ProtectedRoute';
import store from './store';

const Main = React.lazy(() => import('./pages/Main'));
const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'))
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));


console.log("1", store.getState())

store.dispatch({
  type: "GUI_TIEN",
  data: 500000
})

console.log("2", store.getState())

store.dispatch({
  type: "GUI_TIEN",
  data: 100000
})

console.log("3", store.getState())

store.dispatch({
  type: "RUT_TIEN",
  data: 1000000
})

console.log("4", store.getState())

store.dispatch({
  type: "DONG_TAI_KHOAN"
})

async function getProduct() {
  try {
    store.dispatch({
      type: "ADD_PRODUCT_REQUEST"
    })

    const product = []
    store.dispatch({
      type: "ADD_PRODUCT_SUCCESS",
      data: product
    })
    
  } catch(error) {
    store.dispatch({
      type: "ADD_PRODUCT_ERROR",
      error: error
    })
  }
  // 1. dang goi api -> loading....
  // 2. da goi thanh cong -> product
  // 3. Bi loi

  
}

function DongTaiKhoanCreator() {
  return {
    type: "DONG_TAI_KHOAN"
  }
}

store.dispatch(DongTaiKhoanCreator())

// store.subscribe(() => {
//   const state = store.getState()
//   console.log(state)
// })


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeContextCustom>
        <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/(login|dang-nhap)">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <ProtectedRoute exact path="/product-detail/:id">
            <ProductDetail />
          </ProtectedRoute>

          <ProtectedRoute exact path="/me">
            <div>My name is Tai</div>
          </ProtectedRoute>

          {/* <Route 
            exact
            path="/product-detail/:id"
            render={(props) => {
              console.log("props.match", props.match.params.id)
              const product = productData.data.find(elm => elm.id == props.match.params.id)
              console.log(product, "product")
              if(!product) {
                return <h1>404 ko tim thay san pham</h1>
              }
              return <ProductDetail {...product} />
            }}
          /> */}


          <Route path="*">
            <h1>404</h1>
          </Route>

        </Switch>
        </React.Suspense>
      </ThemeContextCustom>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();