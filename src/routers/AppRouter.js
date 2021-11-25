import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route} 
    from 'react-router-dom';
import { Home } from '../componets/Home';
import { Navbar } from '../componets/Navbar';



export const AppRouter = () => {
    return (
        <>
            <Router>
            <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                </Routes>
            </Router>
        </>
    )
}