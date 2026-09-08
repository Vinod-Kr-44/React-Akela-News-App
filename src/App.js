
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
        </div>

        <Routes>
          <Route path="/" element={<News key='general' country='us' pageSize='4'  category='general'/>} />
          <Route path="/business" element={<News key='business' country='us' pageSize='4'  category='business'/>} />
          <Route path="/entertainment" element={<News key='entertainment' country='us' pageSize='4'  category='entertainment'/>} />
          <Route path="/general" element={<News key='general' country='us' pageSize='4'  category='general'/>} />
          <Route path="/health" element={<News key='health' country='us' pageSize='4'  category='health'/>} />
          <Route path="/science" element={<News key='science' country='us' pageSize='4'  category='science'/>} />
          <Route path="/sports" element={<News key='sports' country='us' pageSize='4'  category='sports'/>} />
          <Route path="/technology" element={<News key='technology' country='us' pageSize='4'  category='technology'/>} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

