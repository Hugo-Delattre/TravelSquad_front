import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react'


import Countries from "../../pages/Countries";
import Home from "../../pages/Home";
import Groups from "../../pages/Groups";
import Group from "../../pages/Group";
import CreateGroup from "../../pages/CreateGroup";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import Profile from "../../pages/Profile";
import Team from "../../pages/Team";

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const test = "si on a ce message en console le props drilling marche";
  


  
  
  return (
    
    <div className="App">

      <Routes>
        {/* <Route path="/">
          <Home isLoggedIn={isLoggedIn}/>
        </Route>  */}
        <Route path="/" element={<Home test={test}/>} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/countries/groups" element={<Groups />} />
        <Route path="/countries/group" element={<Group />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes> : 
    </div>
  
  );
};

export default App;
