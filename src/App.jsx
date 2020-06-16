import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import ProductItem from "./components/ProductItem";
import SideBar from "./components/SideBar";
import dataProduct from './product.json'


function App() {
  const [productsInCart, setProductsInCart] = useState([])
  
  const onSelectProduct = (propsOfProductItem) => {
    console.log(propsOfProductItem)
    setProductsInCart([...productsInCart, propsOfProductItem])

    /* 
      productsInCart = []
      productsInCart.push(propsOfProductItem)
    */
  }

  return (
    <Layout productsInCart={productsInCart}>
      <Content>
        {
          dataProduct.data.map(elm => {
            return (
              <ProductItem 
              {...elm} imageURL={elm.image} 
              onSelectProduct={onSelectProduct}
              />
            )
          })
        }
      </Content>
      <SideBar />
    </Layout>
  );
}

export default App;