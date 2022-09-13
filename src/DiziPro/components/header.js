import React, { useContext, useEffect, useState } from "react";
import bgImg from "../img/dizipro no bg 1.png";
import { Link } from "react-router-dom";
import headerImg from "../img/Ellipse 1.png";
import { Context } from "../context";

const Header = (props) => {
  // const [profile, setProfile] = useState(true);

  // const profile = useContext(Context)

  const [profile, setProfile] = useState(false);

  const userLogged = JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    if (userLogged) {
      setProfile(true);
    } else {
      setProfile(false);
    }
  });

  return (
    <div className="header">
      <nav className="nav">
        <input type="checkbox" className="nav__checkbox" id="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav__button"></label>
        <ul className="nav-list">
          <div className="logo">
            <Link to={"/"}>
              <img src={bgImg} alt="" />
            </Link>
          </div>
          <li className="nav-item">
            <Link
              id="1"
              className={props.props === "home" ? "active" : ""}
              to={"/"}
            >
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={props.props === "portfolio" ? "active" : ""}
              id="2"
              to="/portfolio"
            >
              portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              id="3"
              className={props.props === "order" ? "active" : ""}
              to={profile ? "/order-project" : "/log-in"}
            >
              order project
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={props.props === "paid" ? "active" : ""}
              id="4"
              to={profile ? "/paid-courses" : "/log-in"}
            >
              paid courses
            </Link>
          </li>
          {profile ? (
            <li className="nav-item">
              <Link
                id="5"
                className={props.props === "profile" ? "active" : ""}
                to={"/profile"}
              >
                profile
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className="btns">
          <span>
            en <span></span>
          </span>
          <Link to={profile ? "/order-project" : "/log-in"}>
            <button className="btn btn-primary">order now</button>
          </Link>
          {profile ? (
            <Link to={"/profile"} className="header-img">
              <img src={headerImg} alt="" />
            </Link>
          ) : (
            <Link to={"/log-in"}>
              <button className="btn">register</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
