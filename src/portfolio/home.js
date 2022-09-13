import { Button } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-head">
          <h5>Home</h5>
          <div className="btns">
            <Link to={"/signin"}>
              <Button className="btn">Sign in</Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="btn">Sign up</Button>
            </Link>
          </div>
        </div>

        <div className="text">
            <h1>Home Page</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quae rem doloremque debitis reiciendis itaque cupiditate, quo consequuntur commodi? Recusandae dignissimos sapiente, quas ipsa quam tempora cumque at debitis obcaecati.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quae rem doloremque debitis reiciendis itaque cupiditate, quo consequuntur commodi? Recusandae dignissimos sapiente, quas ipsa quam tempora cumque at debitis obcaecati.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quae rem doloremque debitis reiciendis itaque cupiditate, quo consequuntur commodi? Recusandae dignissimos sapiente, quas ipsa quam tempora cumque at debitis obcaecati.
            </p>
            <div className="btns-2">
            <Link to={"/signin"}>
              <Button className="btn">Sign in</Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="btn">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
