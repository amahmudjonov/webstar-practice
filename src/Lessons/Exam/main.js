import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Album from './components/album'
import Comments from './components/comments'
import Photos from './components/photos'
import Todos from './components/todos'
import Users from './components/users'
import { Button, Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PictureOutlined,
  CommentOutlined,
  AppstoreOutlined,
  WalletOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  const [isChanged, setIsChnged] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" style={{
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
          }}>
              {collapsed ? (
            ""
          ) : (
            <h3
              style={{
                textAlign: "center",
                color: "#fff",
                textTransform: "uppercase",
                marginTop: '20px',
                fontWeight: "200",
              }}
            >
              abdulaziz
            </h3>
          )}
          </div>          
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            // items={[
            //   {
            //     key: "1",
            //     icon: <PictureOutlined />,
            //     label: "Photos",
            //   },
            //   {
            //     key: "2",
            //     icon: <WalletOutlined />,
            //     label: "Album",
            //   },
            //   {
            //     key: "3",
            //     icon: <UserOutlined />,
            //     label: "Users",
            //   },
            //   {
            //     key: "4",
            //     icon: <CommentOutlined />,
            //     label: "Comments",
            //   },
            //   {
            //     key: "5",
            //     icon: <AppstoreOutlined />,
            //     label: "Todos",
            //   },
            // ]}
          >
            <Menu.Item key="1">
               <Link to={'/photos'}>
                <PictureOutlined />
               {
                   collapsed ? '' : <span>Photos</span>
               }
               </Link>
            </Menu.Item>
            <Menu.Item key="2">
               <Link to={'/album'}>
            <WalletOutlined />
               {
                   collapsed ? '' : <span>Albums</span>
               }
               </Link>
            </Menu.Item>
            <Menu.Item key="3">
               <Link to={'/users'}>
                <UserOutlined />
               {
                   collapsed ? '' : <span>Users</span>
               }
               </Link>
            </Menu.Item>
            <Menu.Item key="4">
               <Link to={'/comments'}>
               <CommentOutlined />
               {
                   collapsed ? '' : <span>Comments</span>
               }
               </Link>
            </Menu.Item>
            <Menu.Item key="5">
               <Link to={'/todos'}>
               <AppstoreOutlined />
               {
                   collapsed ? '' : <span>Todos</span>
               }
               </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className={`site-layout-sub-header-background ${
              isChanged ? "" : "bg-light"
            }`}
            style={{
              padding: 0,
            }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
                style={
                  isChanged
                    ? {
                        color: "#fff",
                        margin: "0 20px",
                      }
                    : {
                        color: "#000",
                        margin: "0 20px",
                      }
                }
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
                style={
                  isChanged
                    ? {
                        color: "#fff",
                        margin: "0 20px",
                      }
                    : {
                        color: "#000",
                        margin: "0 20px",
                      }
                }
              />
            )}
            <Button
              onClick={() => {
                setIsChnged(!isChanged);
              }}
            >
              Change theme
            </Button>
          </Header>
          <Content
            style={{
              margin: "18px 10px 0",
              overflow: 'auto'
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/photos" element={<Photos />} />
                  <Route path="/album" element={<Album />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/comments" element={<Comments />} />
                  <Route path="/todos" element={<Todos />} />
                </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            React Examination ©2022 by Webstar IT Academy
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Main;
