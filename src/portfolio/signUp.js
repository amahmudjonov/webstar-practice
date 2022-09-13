import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getUser } from "./base/usersData";

export default class SignUp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      innerUser: {
        name: "",
        username: "",
        password: "",
      },
      coPass: "",
      props: this.props,
      isControl: false,
    };
  }

  getval = (e) => {
    this.setState({
      innerUser: {
        ...this.state.innerUser,
        [e.target.name]: e.target.value
      },
    });
  };

  saveUser = () => {

    var {users, innerUser, coPass, isControl} = this.state

    // var getUser = JSON.parse(localStorage.getItem('users'))
    
    // if (
    //   innerUser.name !== '' &&
    //   innerUser.username !== '' &&
    //   innerUser.password !== '' &&
    //   coPass !== ''
    // ) {
    //   if(getUser){
    //     if (getUser.length !== 0) {
    //       console.log(22);
    //       for (let i = 0; i < getUser.length; i++) {
    //         if (getUser[i].username === innerUser.username &&
    //           getUser[i].password === innerUser.password) {
    //           alert('You already have account! You should sign in.')
    //         } else {
    //           console.log(555);
    //         }
    //       }
    //     } else {
    //       if (innerUser.password === coPass) {
    //         this.setState({
    //           innerUser: {
    //             ...innerUser,
    //             id: users.length + 1
    //           }
    //         })
    //         this.setState({
    //           users: users.concat(innerUser)
    //         })
    //         console.log(users);
    //       } else {
    //         console.log(999);
    //       }
    //     }
    //   } else {
    //     localStorage.setItem('users', JSON.stringify(users))
    //   }
    // } else {
    //   alert('You shuld fill every input.')
    // }

    var isExist = false

    if(coPass === innerUser.password) {
      for (let i = 0; i < getUser.length; i++) {
        if (getUser[i].username === innerUser.username &&
          getUser[i].password === innerUser.password) {
          isExist = true
        }        
      }

      if (isExist) {
        alert('You already have account.')
      } else {
        var userList = getUser.concat(innerUser)

        this.setState({
          users: users.push(innerUser)
        })

        localStorage.setItem('users', JSON.stringify(userList))

        this.setState({
          isControl: true
        })
      }
    } else {
      alert('Sorry')
    }
  };

  coPass = (e) => {
    this.setState({
      coPass: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-3">
              <div className="text-center">
                <h1 className="text-primary">Sign Up</h1>
              </div>
              <div className="jumbotron">
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input
                      name="name"
                      onChange={this.getval}
                      placeholder="Name"
                      style={{ marginLeft: "100px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      name="username"
                      onChange={this.getval}
                      placeholder="Username"
                      style={{ marginLeft: "100px" }}
                    />
                  </Form.Item>

                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      name="password"
                      onChange={this.getval}
                      placeholder="Password"
                      style={{ marginLeft: "100px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      name="coPass"
                      onChange={this.coPass}
                      placeholder="Confirm password"
                      style={{ marginLeft: "100px" }}
                    />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Link to={this.state.isControl ? '/signin' : ''}>
                    <Button
                      onClick={this.saveUser}
                      type="primary"
                      htmlType="submit"
                      style={{ marginLeft: "30px" }}
                    >
                      Sign Up
                    </Button>
                    </Link>
                    <Link to={'/signin'}>
                      <Button type="primary" className="m-2">
                        Sign In
                      </Button>
                    </Link>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
