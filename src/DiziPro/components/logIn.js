import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logoImg from "../img/Rectangle.png";

const LogIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const users = JSON.parse(localStorage.getItem('users'))

  const [goToHome, setGoToHome] = useState(false)

  if (goToHome) {
    return <Navigate to={'/'} />
  }

  function checkVal() {
    if (userData.email !== '' && userData.password !== '') {
      users.map(user => {
        if(user.email === userData.email && user.password === userData.password){
          
          localStorage.setItem('loggedUser', JSON.stringify(user))

          setGoToHome(true)
          
        } else{
          if(user.email === userData.email && user.password !== userData.password) {
            alert('Password incorrect')
          } else {
            alert('Email incorrect')
          }
        }
      })
    } else {
      if(userData.email === '') {
        alert('Enter your email')
      } else {
        alert('Enter your password')
      }
    }
  }

  return (
    <>
      <div className="section-login">
        <button className="btn-back">
          <Link to={"/"}>
            <div className=""></div>
            Back
          </Link>
        </button>
        <div className="section-login--content">
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
          <form action="#" className="form">
            <div className="btns">
              <button className="active">Log in</button>
              <button className="">
                <Link to={"/sign-in"}>Sign in</Link>
              </button>
            </div>
            <div className="form--content">
              <label htmlFor="email">email</label>
              <input
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="email"
                name="email"
                placeholder="email"
              />
              <label htmlFor="password">password</label>
              <input
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="password"
                name="password"
                placeholder="password"
              />
              <Link to={"/sign-in"}>Cannot log in?</Link>
              <button onClick={checkVal} className="btn btn-primary">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
