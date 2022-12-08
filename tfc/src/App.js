import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Base from "./components/User/Main";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Plans from "./components/Subscription/Plans"
import ListStudios from "./components/StudiosByLocation"
import User_Main from "./components/User/User-Main";
import Profile from "./components/User/Profile";
import GetPlan from "./components/Subscription/getPlan/getplan"
import UpdatePlan from "./components/Subscription/update-plan/update-plan"
import UpdateCard from "./components/Subscription/update-card/update-card"
import EditProfile from "./components/User/Profile/editProfile/index"


import APIContext, {useAPIContext} from "./Contexts/APIContext";
import APIContextTwo, {useAPIContextTwo} from "./Contexts/APIContextTwo";

function App() {

  const studios = (
    <APIContext.Provider value={useAPIContext()}>
      <APIContextTwo.Provider value={useAPIContextTwo()}>
        <ListStudios />
      </APIContextTwo.Provider>
    </APIContext.Provider>
  )

  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<div><Base/></div>}/>
          <Route path='/register' element={<div><Register/></div>}/>
          <Route path='/login' element={<div><Login/></div>}/>
          <Route path='/plans' element={<div><Plans/></div>}/>
          <Route path='/get-plan' element={<div><GetPlan/></div>}/>
          <Route path='/update-card' element={<div><UpdateCard/></div>}/>
          <Route path='/update-plan' element={<div><UpdatePlan/></div>}/>
          <Route path='/studios' element={studios}/>
          <Route path='/main' element={<div><User_Main/></div>}> </Route>
          <Route path='/main/profile' element={<div><Profile/></div>}> </Route>
          <Route path='/main/profile/edit' element={<div><EditProfile/></div>}> </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
