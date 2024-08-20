import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import New from "./pages/NewCollection/New";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from './components/Login';
import VerifyOtp from './components/VerifyOtp'
import SignUp from './components/Signup'
import Cart from './components/Cart'
import Account from './components/Account'
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app bg-gray-900 text-gray-100">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login />} />
          <Route path='/verify' element={<VerifyOtp/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
          <Route path='/mycart' element={<Cart />} />
          <Route path="/new" element={<New />} />
          <Route path="/new/:newId" element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
