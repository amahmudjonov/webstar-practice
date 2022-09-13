import React, { useEffect, useState } from "react";
import { Link, Navigate, Redirect } from "react-router-dom";
import logoImg from "../img/Rectangle.png";

const SignIn = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [coPass, setCoPass] = useState("");

  function getVal(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      id: users.length + 1
    });
  }

  function getCoPass(e) {
    setCoPass(e.target.value);
  }

  const [filled, setFilled] = useState(false);

  const [goTo, setGoTo] = useState(false);

  if (goTo) {
    return <Navigate to={"/log-in"} />;
  }

  function setData() {
    if (
      userData.fullName !== "" &&
      userData.email !== "" &&
      userData.password !== ""
    ) {
      if (userData.password === coPass) {
        setUsers(users.concat(userData));
        localStorage.setItem("users", JSON.stringify(users));

        console.log(users);
        if (users.length > 0) {
          setGoTo(true);
        }
      } else {
        alert("Password is not confirmed");
      }
    } else {
      alert("You must fill every input");
    }
  }
  return (
    <>
      <div className="section-signin">
        <button className="btn-back">
          <Link to={"/"}>
            <div className=""></div>
            Back
          </Link>
        </button>
        <div className="section-signin--content">
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
          <form action="#" className="form">
            <div className="btns">
              <button className="">
                <Link to={"/log-in"}>Log in</Link>
              </button>
              <button className="active">Sign in</button>
            </div>
            <div className="form--content">
              <label htmlFor="fullName">full name</label>
              <input
                required={true}
                onChange={getVal}
                type="text"
                name="fullName"
                placeholder="full name"
              />
              <label htmlFor="email">email</label>
              <input
                required={true}
                onChange={getVal}
                type="email"
                name="email"
                placeholder="email"
              />
              <label htmlFor="password">password</label>
              <input
                required={true}
                onChange={getVal}
                type="password"
                name="password"
                placeholder="password"
              />
              <label htmlFor="coPass">confirm password</label>
              <input
                required={true}
                onChange={getCoPass}
                type="password"
                name="coPass"
                placeholder="password"
              />
              {/* <Link to={filled ? "/" : ""}> */}
              <button
                onClick={setData}
                type="button"
                className="btn btn-primary"
              >
                Sign in
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
