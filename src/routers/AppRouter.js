import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import  Cart  from '../componets/Cart';
import  Details  from '../componets/Details';
import  Home  from '../componets/Home';
import  Login  from '../componets/Login';
import  Navbar  from '../componets/Navbar';
import  SignIn  from '../componets/SignIn';



function AppRouter (){
    return (
        
            <Router>
            <Navbar />
                <Routes>
                <Route exact path="/Guappjolotas/" element={<Navigate to="/home" />}/>
                <Route exact path="/" element={<Navigate to="/home" />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signIn" element={<SignIn />}/>
                    <Route path="/details/:id" element={<Details />}/>
                    <Route path="/cart" element={<Cart />}/>
                    
                    
                    
                    
                </Routes>
            </Router>
        
    );
};
export default AppRouter;