import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import React from 'react';
// import './App.css';

var user = null;



function App() {
  
    user =JSON.parse(localStorage.getItem('user'));
    console.log(user.role)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        {
          <Route path="/dashboard" element = {user.role == 'admin' ? <Dashboard/> : <Login/>} />
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
