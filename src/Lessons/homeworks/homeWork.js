import React, { Component } from 'react'

export default class HomeWork extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    getName = (e) => {
        this.setState({
            user: {
                name: e.target.value,
                email: this.state.user.email,
                password: this.state.user.password
            }
        })
    }
    getEmail = (e) => {
        this.setState({
            user: {
                name: this.state.user.name,
                email: e.target.value,
                password: this.state.user.password
            }
        })
    }
    getPass = (e) => {
        this.setState({
            user: {
                name: this.state.user.name,
                email: this.state.user.email,
                password: e.target.value
            }
        })
    }
    addUser = () => {
        this.state.users.push(this.state.user)
       console.log(this.state.users);
    }

  render() {
    return (
      <div className='container p-5'>
          <form action="#" onSubmit={this.addUser} className='form-control d-flex'>
            <input required type="text" onChange={this.getName} className='form-control m-2' placeholder='Name' />
            <input required type="email" onChange={this.getEmail} className='form-control m-2' placeholder='Email' />
            <input required type="password" onChange={this.getPass} className='form-control m-2' placeholder='Password' />
            <input type="submit" className='btn btn-primary m-2'  />
          </form>
          <table className='table table-striped table-hover'>
              <thead>
                  <tr>
                      <td>#</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Password</td>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.users.map((index, item) => {
                            <tr>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                      })
                  }
              </tbody>w
          </table>
      </div>
    )
  }
}
