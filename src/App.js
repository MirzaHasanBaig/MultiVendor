import React from 'react';
import { useRef } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import EndNav from './Component/EndNav';
import Slider from './Component/Slider';
import { TimeProduct } from './Component/TimeProduct';
import Footer from './Component/Footer';
import Offer from './Component/Offer';
import ProductCategories from './ProductCategories';
// import CardSlider from './Component/CardSlider';
import Email from './Component/Email';
import {Route, Routes,Link } from "react-router-dom";
import Login from './Login';

const Home = ()=>{
  return(<> <Slider></Slider>
  <Offer></Offer>
  <TimeProduct></TimeProduct>
  <ProductCategories></ProductCategories>
  <ProductCategories></ProductCategories>
  <ProductCategories></ProductCategories></>
  );
}


function App() {
  return (
    <>
      <div className="page-wrapper">
          <header className="header">
              <Navbar></Navbar>
              <EndNav></EndNav>
          </header>
          <main className='main'>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='blogs' element={<Login/>} exact/>
          </Routes>
          
          <Email></Email>
          <Footer></Footer>
          </main>
      </div>
    </>
  );
}

export default App;
