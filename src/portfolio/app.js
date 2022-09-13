import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabinet from './cabinet';
import Home from './home';
import SignIn from './signIn';
import SignUp from './signUp';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/cabinet' element={<Cabinet />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;