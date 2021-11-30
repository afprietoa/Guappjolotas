import React from 'react'
import {HashRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import { Cart } from '../componets/Cart';
import { Details } from '../componets/Details';
import { Home } from '../componets/Home';
import { Navbar } from '../componets/Navbar';



export const AppRouter = () => {
    return (
        <>
            <Router>
            <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/details/:id" element={<Details />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route exact path="/*" element={<Navigate to="/home" />}/>
                    <Route exact path="/Guappjolotas" element={<Navigate to="/home" />}/>
                </Routes>
            </Router>
        </>
    )
}