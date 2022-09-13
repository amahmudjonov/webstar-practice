import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LastPage from "./homeWorkComponents/homeWork9/lastPage";
import SignUp from "./homeWorkComponents/homeWork9/signUp";
import { Context } from "../Context API/context";

const HomeWork9 = () => {
    const user = useContext(Context)
  return (
    <div>
        {/* <Context.Provider value={user}>
            <SignUp />
            <LastPage />
        </Context.Provider> */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />}/>
                <Route path="/lastpage" element={<LastPage />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default HomeWork9