import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/routes/home/home'
import About from '../components/routes/about/about'
import Contact from '../components/routes/contact/contact'
import Header from '../components/routes/header/header'

export default class HomeWork5 extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div>
          <BrowserRouter>
            <Header />
            <div className="container">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            </div>
          </BrowserRouter>
      </div>
    )
  }
}
