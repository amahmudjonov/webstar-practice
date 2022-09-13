import React, { Component } from 'react'
import Props from '../props'

export default class Bootstrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],      
      user: {
        name: '',
        password: '',
      },
    }
  }
  getName = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        name: e.target.value
      }
    })
  }
  getPass = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        password: e.target.value
      }
    })
  }
  addUser = () => {

    if (this.state.user.name != '' && this.state.user.password != '') {
        this.setState({
          users: this.state.users.concat(this.state.user)
        })
    } else {
      return false
    }      
    console.log(this.state.users);
  }
  render() {
    const st = this.state
    return (
      <div className="container p-5">
          <form action="#">
            <input required type="text" onChange={this.getName} placeholder='Enter your name' className="form-control" />
            <input required type="password" onChange={this.getPass} placeholder='Enter your password' className="form-control" />
            <button className="btn btn-success mt-3" onClick={this.addUser}>Send info</button>
          </form>
          <Props str = {this.state.name} />

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
                {
                  st.users.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.password}</td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
      </div>
    )
  }
}
