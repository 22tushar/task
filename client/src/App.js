import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Addpost from "./pages/Addpost";



function App() {
  
    // user =JSON.parse(localStorage.getItem('user'));
    // console.log(user.role)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/addpost" element = {<Addpost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
