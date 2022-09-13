import { Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
            setUsers(data.data)
            console.log(data);
        })
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'id'
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'id'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'id'
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
            key: 'id'
        },
    ]

  return (
    <>
    {
        console.log(users)
    }
        <Table dataSource={users} columns={columns} />
    </>
  )
}

export default Users