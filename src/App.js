
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

export default class App extends Component {
  pageSize=5;

  render() {
    return (
       <BrowserRouter>

        <div>
          <NavBar/>
        </div>

        <Routes>
          <Route path="/" element={<News key='general' country='us' pageSize={this.pageSize}  category='general'/>} />
          <Route path="/business" element={<News key='business' country='us' pageSize={this.pageSize}  category='business'/>} />
          <Route path="/entertainment" element={<News key='entertainment' country='us' pageSize={this.pageSize}  category='entertainment'/>} />
          <Route path="/general" element={<News key='general' country='us' pageSize={this.pageSize}  category='general'/>} />
          <Route path="/health" element={<News key='health' country='us' pageSize={this.pageSize}  category='health'/>} />
          <Route path="/science" element={<News key='science' country='us' pageSize={this.pageSize}  category='science'/>} />
          <Route path="/sports" element={<News key='sports' country='us' pageSize={this.pageSize}  category='sports'/>} />
          <Route path="/technology" element={<News key='technology' country='us' pageSize={this.pageSize}  category='technology'/>} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

