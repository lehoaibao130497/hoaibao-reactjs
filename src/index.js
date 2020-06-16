import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/Main';
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail';
import * as serviceWorker from './serviceWorker';
import { ThemeContextCustom } from './hooks/useBgMode'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextCustom>
      <ProductDetail />
    </ThemeContextCustom>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();