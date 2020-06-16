import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/Main';
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail';
import * as serviceWorker from './serviceWorker';
import { ThemeContextCustom } from './hooks/useBgMode'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeContextCustom>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/product-detail">
            <ProductDetail />
          </Route>

          <Route path="*">
            <h1>404</h1>
          </Route>

        </Switch>
        
      </ThemeContextCustom>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();