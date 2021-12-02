import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import { Cart } from '../componets/Cart';
import { Details } from '../componets/Details';
import { Home } from '../componets/Home';
import { Login } from '../componets/Login';
import { Navbar } from '../componets/Navbar';
import { SignIn } from '../componets/SignIn';



export const AppRouter = () => {
    return (
        <>
            <Router>
            <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/details/:id" element={<Details />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/signIn" element={<SignIn />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route exact path="/*" element={<Navigate to="/home" />}/>
                    <Route exact path="/Guappjolotas" element={<Navigate to="/home" />}/>
                </Routes>
            </Router>
        </>
    )
}