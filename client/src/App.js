import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import React from 'react';
// import './App.css';

var user = null;



function App() {
  React.useEffect(() =>{
    user = localStorage.getItem('user');
 }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        {
          user ?
          <Route path="/dashboard" element = {<Dashboard/>} /> : null
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
