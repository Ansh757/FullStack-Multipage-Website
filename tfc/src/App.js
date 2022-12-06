import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Base from "./components/User/Main";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Plans from "./components/Subscription/Plans"
import User_Main from "./components/User/User-Main";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<div><Base/></div>}/>
          <Route path='/signup' element={<div><Register/></div>}/>
          <Route path='/signin' element={<div><Login/></div>}/>
          <Route path='/plans' element={<div><Plans/></div>}/>
          <Route path='/main' element={<div><User_Main/></div>}> </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
