import { Table } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Album = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums').then(data => {
            setData(data.data)
        })
    })

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'id'
        },
        {
            title: 'UserId',
            dataIndex: 'userId',
            key: 'id'
        }
    ]
  return (
    <>
    {
        console.log(data)
    }
        <Table dataSource={data} columns={columns} />
    </>
  )
}

export default Album