import React, { useState, useEffect } from "react";
import { Context } from "../context";
import Data from "./data";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [users, setUsers] = useState([]);

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios.get(url).then((data) => {
      setUsers(data.data);
    });
  }, []);

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function getName(e) {
    const val = e.target.value;
    setName(val);
  }
  function getUserName(e) {
    const val = e.target.value;
    setUserName(val);
  }
  function getEmail(e) {
    const val = e.target.value;
    setEmail(val);
  }
  function getPhone(e) {
    const val = e.target.value;
    setPhone(val);
  }

  function setUserData() {
    var userData = {
      id: users.length + 1,
      name: name,
      username: username,
      email: email,
      phone: phone,
    };
    if (name !== "" && username !== "" && email !== "" && phone !== "") {
      setUsers(users.concat(userData));
      console.log(users);
    }
  }

  useEffect(() => {});

  return (
    <div className="container">
      <h1 className="text-center">Main</h1>

      <form action="#">
        <input
          onChange={getName}
          name="name"
          type="text"
          className="form-control my-2"
          placeholder="Name"
        />
        <input
          onChange={getUserName}
          name="username"
          type="text"
          className="form-control my-2"
          placeholder="Username"
        />
        <input
          onChange={getEmail}
          name="email"
          type="text"
          className="form-control my-2"
          placeholder="Email"
        />
        <input
          onChange={getPhone}
          name="number"
          type="text"
          className="form-control my-2"
          placeholder="Phone Number"
        />
      </form>

      <button onClick={setUserData} className="btn btn-outline-primary">
        Add user
      </button>

      <Link to={true ? "/all-users" : ""} state={users}>
        <button className="btn btn-outline-primary m-3">All Users</button>
      </Link>

      <Context.Provider value={users}>
        <Data />
      </Context.Provider>
    </div>
  );
};

export default Main;
