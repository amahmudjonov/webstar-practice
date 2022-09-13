import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import LogIn from "./components/logIn";
import Order from "./components/order";
import Complate from "./components/complate";
import SectionEditOrder from "./components/section_EditOrder";
import PaidCourses from "./components/paidCourses";
import Settings from "./components/settings";
import PayPage from "./components/payPage";
import ProfilePage from "./components/profilePage";
import EditOrder from "./components/editOrder";
import { ConfigContext } from "antd/lib/config-provider";
import { Context } from "./context";
import SignIn from "./components/sign-in";

const App = () => {
  /* const [menuItem, setMenuItem] = useState([
        {
            name: 'home',
            className: 'nav-item',
            active: true
        },
        {
            name: 'portfolio',
            className: 'nav-item',
            active: false
        },
        {
            name: 'order project',
            className: 'nav-item',
            active: false
        },
        {
            name: 'paid courses',
            className: 'nav-item',
            active: false
        },
        {
            name: 'profile',
            className: 'nav-item',
            active: false
        },
    ]) */

  const [profile, setProfile] = useState(false);

  const userLogged = JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    if (userLogged) {
      setProfile(true);
    } else {
      setProfile(false)
    }
  });

  return (
    <BrowserRouter>
      <Context.Provider value={profile}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/order-project" element={<Order />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/paid-courses" element={<PaidCourses />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/payment" element={<PayPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-order" element={<SectionEditOrder />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/complated" element={<Complate />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
