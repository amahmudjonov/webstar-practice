import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllUsers from './allUsers'
import Data from './data'
import Main from './main'

const Desktop = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/all-users' element={<AllUsers />} />
            <Route path='/data' element={<Data />} />
            <Route path='/' element={<Main />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Desktop