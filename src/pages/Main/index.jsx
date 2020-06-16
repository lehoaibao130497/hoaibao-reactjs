import React, { useState } from "react";
import "./Main.css";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import ProductItem from "../../components/ProductItem";
import SideBar from "../../components/SideBar";
import dataProduct from '../../product.json'


function Main() {
  const [products, setProducts] = useState(dataProduct.data)
  const [productsInCart, setProductsInCart] = useState([])

  const onSelectProduct = (propsOfProductItem) => {
    console.log(propsOfProductItem)
    setProductsInCart([...productsInCart, propsOfProductItem])

    /* 
      productsInCart = []
      productsInCart.push(propsOfProductItem)
    */
  }
  const sortNameAZ =() => {
    console.log("sortAZ")
    const newProductSort = [...products].sort((a,b) => a.name.localeCompare(b.name))
    setProducts(newProductSort)
  }

  const sortNameZA =() => {
    console.log("sortAZ")
    const newProductSort = [...products].sort((a,b) => b.name.localeCompare(a.name))
    setProducts(newProductSort)
  }

  return (
    <Layout productsInCart={productsInCart}>
      <main>
      <section className="shop-area pt-150 pb-100">
          <div className="container">
            <div className="row">
            <Content>
              {
                products.map(elm => {
                  return (
                    <ProductItem 
                    {...elm} imageURL={elm.image} 
                    onSelectProduct={onSelectProduct}
                    />
                  )
                })
              }
            </Content>
            <SideBar sortNameZA={sortNameZA} sortNameAZ={sortNameAZ}/>
            </div>
          </div>
        </section>
    </main>

    </Layout>
  );
}

export default Main;