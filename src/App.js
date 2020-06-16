import React from 'react';
import logo from './logo.svg';
import Layout from './components/Layout'
import './App.css';

const products = [
  {
    type: "Furniture",
    name: "Iphone 999",
    imageURL: "https://media3.scdn.vn/img4/2020/03_16/FBeRVqPng49HKEg1qnqs_simg_b5529c_250x250_maxb.jpg",
    price: "120.000 VND",
    discountPrice: "100.000 VND"
  },
  {
    type: "Tablet",
    name: "Samsung Pro 123456",
    imageURL: "https://media3.scdn.vn/img4/2020/03_04/O6MAvAed87qmmdqsFaYw_simg_b5529c_250x250_maxb.jpg",
    price: "720.000 VND",
    discountPrice: "520.000 VND"
  },
  {
    type: "Baby",
    name: "Bobby",
    imageURL: "https://media3.scdn.vn/img4/2020/03_18/fx0jRvqJ7wVYmcj9swIb_simg_b5529c_250x250_maxb.jpg",
    price: "110.000 VND",
    discountPrice: "78.000 VND"
  }
]

function Price(props) {
  return (
    <>
      <span>{props.discountPrice}</span>
      <strike>{props.price}</strike>
    </>
  )
}
function Title(props) {
  return (
    <>
      <p>{props.type}</p>
      <p>{props.name}</p>
    </>
  )
}
function Image(props) {
  return (
    <img src={props.imageURL} />
  )
}
function ProductItem(props) {
  return (
    <div className="product-item">
      <Image imageURL={props.data.imageURL}/>
      <Title type={props.data.type} name={props.data.name} />
      <Price price={props.data.price} discountPrice={props.data.discountPrice} />
    </div>
  )
}
function App() {
  return (
    <Layout>
      <div className="products">
      {
        products.map(elm => {
          return <ProductItem data={elm} />
        })
      }
    </div>
    </Layout>
  );
}
export default App;