import React, { useEffect, useState } from 'react';
import { Table, Button, Input, InputNumber, Popconfirm, Form, Typography } from "antd";
import { EditOutlined, DeleteOutlined, CloseOutlined } from '@ant-design/icons'
import { Modal } from 'antd';
import axios from 'axios';

const CRUD = () => {

    const [dataSource, setDataSource] = useState([
        // {
        //     id: 1,
        //     name: 'Xayrullo',
        //     age: '15',
        //     address: 'Nozimaxonim 6 16'
        // },
        // {
        //     id: 2,
        //     name: 'Abdulaziz',
        //     age: '15',
        //     address: 'Toshkent 6 16'
        // },
        // {
        //     id: 3,
        //     name: 'Ozoda',
        //     age: '18',
        //     address: 'Yunusobod 6 16'
        // },
        // {
        //     id: 4,
        //     name: 'Shahzoda',
        //     age: '16',
        //     address: 'Chirchiq 6 16'
        // },
    ]);

    const [isEdit, setIsEdit] = useState(false)
    const [selectedUser, setSelecteddUser] = useState(null)

    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Username",
            dataIndex: "username",
            key: "username"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (thisUser) => {
                return <>
                    <EditOutlined onClick={ () => editUser(thisUser) } className='text-primary' />
                    <DeleteOutlined onClick={ () => deleteUser(thisUser) } className='text-primary mx-4' />
                </>
            }
        }
    ]

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users'

        axios.get(url).then(data => {
            setDataSource(data.data)
            console.log(data.data);
        })
    }, [])

    const editUser = (thisUser) => {
        setIsEdit(true)
        setSelecteddUser(thisUser)

    }

    const deleteUser = (thisUser) => {
        Modal.confirm({
            title: 'Delete this user?',
            okText: 'Yes',
            cancelText: 'Cancel',
            closeIcon: <CloseOutlined />,
            closable: true,
            onOk: () => {
                setDataSource(item => {
                    return item.filter(user => user.id !== thisUser.id)
                })
            },

        })
    }

    const addUser = () => {
        const randomNum = parseInt(Math.random() * 100);;
        const randomAge = parseInt(Math.random() * 100);;
        const randomUser = {
            id: randomNum,
            name: "Sobir",
            age: randomAge,
            address: 'Tashmi' + randomNum
        }

        setDataSource(prev => {
            return [...prev, randomUser]
        })
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-10 offset-1">
                <Button onClick={ addUser } className='my-4'>Add random user</Button>
                <Table dataSource={dataSource} columns={columns}>

                </Table>

                <Modal 
                visible={isEdit}
                onCancel={() => setIsEdit(false)}
                okText='Save'
                cancelText='Cancel'
                onOk={() => {
                    setDataSource(prev => {
                        return prev.map(user => {
                            if (user.id === selectedUser.id) {
                                return selectedUser
                            } else {
                                return user
                            }
                        })
                    })

                    setIsEdit(false)
                }}
                >
                    <Input onChange={(e) => {
                        return setSelecteddUser(pre => {
                            return {...pre, name: e.target.value}
                        })
                    }} className='mt-5' value={ selectedUser?.name} />
                    <Input onChange={(e) => {
                        return setSelecteddUser(pre => {
                            return {...pre, age: e.target.value}
                        })
                    }} className='mt-2' value={ selectedUser ? selectedUser.age : ''} />
                    <Input onChange={(e) => {
                        return setSelecteddUser(pre => {
                            return {...pre, address: e.target.value}
                        })
                    }} className='mt-2' value={ selectedUser ? selectedUser.address : ''} />
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default CRUD


/* C(create) R(read) U(update) D(delete)*/