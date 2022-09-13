import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import Cabinet from "./cabinet";
import { getUser } from "./base/usersData";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "aa",
          password: "1",
        },
        {
          username: "ab",
          password: "2",
        },
      ],
      username: "",
      password: "",
      isChacked: false,
      isSmiling: true,
      disabled: true,
    };
  }

  getName = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (this.state.password === "") {
      this.setState({
        disabled: true,
      });
    }
  };

  getPassword = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (this.state.name === "" && this.state.password === "") {
      this.setState({
        disabled: true,
      });
    } else {
      this.setState({
        disabled: false,
      });
    }
  };

  checkUser = () => {
    const st = this.state;

    // var isExist = false;

    // if (getUser) {
    //   for (let i = 0; i < getUser.length; i++) {
    //     if (
    //       getUser[i].username === st.username &&
    //       getUser[i].password === st.password
    //     ) {
    //       isExist = true;
    //     } else {
    //       alert(`User is not found. Please sign up.`);
    //     }
    //   }
    // }

    // if (isExist) {
    //   this.setState({
    //     isChacked: true,
    //   });
    //   console.log('ok')
    // } else {
    //   alert(`User is not found. Please sign up.`);
    // }

    for (let i = 0; i < getUser.length; i++) {
      if (getUser[i].username === st.username && getUser[i].password === st.password) {
        this.setState({
          isChacked: true
        })
      }      
    }
  };

  render() {
    return (
      <div>
        {this.state.isChacked ? (
          <Cabinet username={this.state.username} />
        ) : (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 offset-3">
                <div className="text-center">
                  <h1 className="text-primary">Sign In</h1>
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
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        name="username"
                        onChange={this.getName}
                        placeholder="Name"
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
                        onChange={this.getPassword}
                        placeholder="Password"
                        style={{ marginLeft: "100px" }}
                      />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button
                        disabled={this.state.disabled}
                        onClick={this.checkUser}
                        type="primary"
                        htmlType="submit"
                        style={{ marginLeft: "30px" }}
                      >
                        Sign In
                      </Button>
                      <Link to={"/signup"}>
                        <Button type="primary" className="m-2">
                          Sign Up
                        </Button>
                      </Link>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
