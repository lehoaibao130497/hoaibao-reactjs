import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import Content from './components/Content';
import ProductItem from './components/ProductItem';
import SideBar from './components/SideBar';

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

function App() {
  return (
    <Layout>
      <Content>
        <ProductItem />
      </Content>
      <SideBar />
    </Layout>
  );
}


export default App;