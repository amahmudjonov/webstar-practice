import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from '../components/routes/dashboard/dashboard'
import Orders from '../components/routes/orders/orders'
import Customers from '../components/routes/customers/customers'
import Reports from '../components/routes/reports/report'


export default class HomeWork5 extends Component {
  render() {
    const css = {
        color: '#111',
        textDecoration: 'none',
        fontSize: '14pt'
      }
    return (
      <div>
          <BrowserRouter>
            <div className="side-bar">
            <ul className="list-unstyled list-group list-group-vertical">
            <li className='list-item m-2'>
                <img src="https://img.icons8.com/material-rounded/344/ffffff/dashboard-layout.png" alt="" />
              <Link className='link' to={'/'}>Dashboard</Link>
            </li>
            <li className='list-item m-2'>
                <img src="https://img.icons8.com/pastel-glyph/344/ffffff/shopping-trolley--v2.png" alt="" />
              <Link className='link' to={'/orders'}>Orders</Link>
            </li>
            <li className='list-item m-2'>
                <img src="https://img.icons8.com/ios/344/ffffff/user-group-man-man.png" alt="" />
              <Link className='link' to={'/customers'}>Customers</Link>
            </li>
            <li className='list-item m-2'>
                <img src="https://img.icons8.com/ios/344/ffffff/combo-chart--v1.png" alt="" />
              <Link className='link' to={'/reports'}>Reports</Link>
            </li>
          </ul> 
            </div>
            <div className="container">
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/reports' element={<Reports />} />
            </Routes>
            </div>
          </BrowserRouter>
      </div>
    )
  }
}