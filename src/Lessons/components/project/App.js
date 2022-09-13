import React, { Component } from 'react'
import Header from '../routes/header/header'
import Home from '../routes/home/home'
import About from '../routes/about/about'
import Blog from '../routes/blog/blog'
import Contact from '../routes/contact/contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
          {/* <Header />
          <ul className="list-unstyled list-group list-group-horizontal">
              <li>1222</li>
          </ul> */}

          <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/blog' element={ <Blog /> } />
                <Route path='/contact' element={ <Contact /> } />
            </Routes>
          </BrowserRouter>
      </div>
    )
  }
}
