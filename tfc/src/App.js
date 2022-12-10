import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Base from "./components/User/Main";
import Login from "./components/User/Login";
import Index from "./components/User/Register";
import Plans from "./components/Subscription/Plans"
import ListStudios from "./components/StudiosByLocation"
import WithRoute from "./components/User/User-Main";
import Profile from "./components/User/Profile/index";
import GetPlan from "./components/Subscription/getPlan/getplan";
import UpdateCard from "./components/Subscription/update-card/update-card";
import UpdatePlan from "./components/Subscription/update-plan/update-plan";
import EditProfile from "./components/User/EditProfile";
import ViewPlan from './components/Subscription/view-plan/view-plan';

import APIContext, {useAPIContext} from "./Contexts/APIContext";
import APIContextTwo, {useAPIContextTwo} from "./Contexts/APIContextTwo";
import APIContextUser, {useUserAPIContext} from "./Contexts/APIContextUser";
import Register from "./components/User/Register";
function App() {

  const studios = (
    <APIContext.Provider value={useAPIContext()}>
      <APIContextTwo.Provider value={useAPIContextTwo()}>
        <ListStudios />
      </APIContextTwo.Provider>
    </APIContext.Provider>
  )

    const register = (
      <APIContextUser.Provider value={useUserAPIContext()}>
          <Register/>
      </APIContextUser.Provider>

    )

    const edit = (
        <APIContextUser.Provider value={useUserAPIContext()}>
            <EditProfile/>
        </APIContextUser.Provider>

    )

    const profile = (
        <APIContextUser.Provider value={useUserAPIContext()}>
            <Profile/>
        </APIContextUser.Provider>

    )
  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<div><Base/></div>}/>
          <Route path='register' element={register}/>
          <Route path='login' element={<div><Login/></div>}/>
          <Route path='plans' element={<div><Plans/></div>}/>
          <Route path='get-plan' element={<GetPlan/>}></Route>
          <Route path=':id/update-card' element={<div><UpdateCard/></div>}></Route>
          <Route path=':id/update-plan' element={<div><UpdatePlan/></div>}></Route>
          <Route path='studios' element={studios}/>
          <Route path='main' element={<div><WithRoute/></div>}> </Route>
          <Route path=':id/profile' element={profile}></Route>
          <Route path=':id/edit' element={edit}></Route>
          <Route path=':id/view-plan' element={<ViewPlan/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
