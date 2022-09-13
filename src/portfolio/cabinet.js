import React, { Component } from "react";
import './cabinet.css'
import { Button, Layout, Menu } from "antd";
import { Table, Form, Input } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

export default class Cabinet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      collapsed: false,
      checked: null,
      users: JSON.parse(localStorage.getItem("users")),
      values: {},
      disabled: true
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const st = this.state;
    return (
      <div>
        <Layout style={{
          height: '100vh'
        }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "nav 1",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "nav 2",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background d-flex justify-content-between align-items-center px-5"
              style={{ padding: 0 }}
            >
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
              <h5 style={{color: '#fff'}}>{this.state.username}</h5>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>UserName</th>
                      <th>Password</th>
                      <th>Actioin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {st.users.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          {st.checked === index ? (
                            <td>
                              <input
                                className="form-control"
                                onChange={(e) => {
                                  this.setState(
                                    () => (st.values.fullname = e.target.value)
                                  );
                                }}
                                value={st.values.fullname}
                              ></input>
                            </td>
                          ) : (
                            <td>{item.fullname}</td>
                          )}
                          {st.checked === index ? (
                            <td>
                              <input
                                className="form-control"
                                onChange={(e) => {
                                  this.setState(
                                    () => (st.values.username = e.target.value)
                                  );
                                }}
                                value={st.values.username}
                              ></input>
                            </td>
                          ) : (
                            <td>{item.username}</td>
                          )}
                          {st.checked === index ? (
                            <td>
                              <input
                                className="form-control"
                                onChange={(e) => {
                                  this.setState(
                                    () => (st.values.password = e.target.value)
                                  );
                                }}
                                value={st.values.password}
                              ></input>
                            </td>
                          ) : (
                            <td>{item.password}</td>
                          )}
                          <td>
                            <Button
                              onClick={() => {
                                this.setState({ checked: index });
                                const val = {
                                  fullname: item.fullname,
                                  username: item.username,
                                  password: item.password,
                                };
                                this.setState({ values: val });
                                this.setState({disabled: false})
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => {
                                const updateRow = st.users;
                                const val = st.values;
                                updateRow.splice(st.checked, 1, { ...val });
                                localStorage.setItem(
                                  "users",
                                  JSON.stringify(updateRow)
                                );
                                this.setState({
                                  checked: null,
                                });
                                this.setState({disabled: true})
                              }}

                              disabled={st.disabled}
                            >
                              Save
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
