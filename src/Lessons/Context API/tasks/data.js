import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'
import {Context} from '../context'
import AllUsers from './allUsers'
import { Link } from 'react-router-dom'

const Data = () => {

  const innerUrl = useContext(Context)
  const [users, setUsers] = useState([])

  return (
    <div>
      {
      }
    </div>
  )
}

export default Data