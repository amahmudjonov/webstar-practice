import React, { useState } from 'react'

const HomeWork10 = () => {

    const [name, setName] = useState('')
    const [data, setData] = useState('')
    const [userData, setUserData] = useState({
        name: name,
        data: data,
    })
    const [usersList, setUsersList] = useState([])

    const usersData = []

    function getName(e) {
        setName(e.target.value)
    }
    function getData(e) {
        setData(e.target.value)
    }
    function setUser() {
        
        if (name !== '' && data !== '') {
            const userData = {
                id: usersData.length + 1,
                name: name,
                data: data,
            }
            usersData.concat(userData)

            setUsersList(usersData)
            
        } else {
            alert('You must fill every input')
        }


    }

  return (
    <div>
        <div className="container">
            <form action="#" className='form-control m-2'>
                <label htmlFor="name">Name:</label>
                <input onChange={ getName } type="text" name='name' className='form-control' />
                <label htmlFor="data">Data:</label>
                <input onChange={ getData } type="date" className="form-control" />
                <button type='button' onClick={ setUser } className="btn btn-warning mt-3 mb-2">Add</button>
            </form>

            <table className='table table-stripped table-hover text-center mt-5'>
                <tbody>
                    {
                        
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default HomeWork10