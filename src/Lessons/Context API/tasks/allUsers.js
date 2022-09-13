import React from 'react'
import { useContext } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import { Context } from '../context'
import { RollbackOutlined } from '@ant-design/icons'

 
const AllUsers = () => {

  const location = useLocation()
  const users = location.state
  const innerUser = useContext(Context)

  return (
    <div className='container'>
      <h1 className="text-center mt-5">All Users</h1>
      <table className="table table-stripped table-hover mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <Link to={'/'} className='btn btn-outline-primary'>
        <RollbackOutlined className='m-1' />
      </Link>
    </div>
  )
}

export default AllUsers