import './App.css';
// import { Link } from 'react-router-dom';
// import {useState}from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
// import { Route, Switch } from "react-router";
import {
  // BrowserRouter as Router,
  Switch,
  // Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
 
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <div className="container my-3">
    <Routes>
           <Route path="/About" element={<About/>}/>
          <Route path="/" element={<TextForm/>}/>
            {/* <TextForm  heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> */}
     </Routes>
    </div>
    </BrowserRouter>
    </> 
  );
}

export default App;