
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

export default class App extends Component {

  render() {
    return (
       <BrowserRouter>
        <div>
          <NavBar/>
          {/* <News/> */}
        </div>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
