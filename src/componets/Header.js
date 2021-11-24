import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../assets/icons/logo.png'

const Navbar = styled.div`
    text-align: center;
    justify-content: space-between;
    display: flex;
    padding: 10px 10px 20px 10px;
`;
const ImgLogo = styled.img`
width: 60px;    
`;
const ImgCart = styled.div`
font-size: 40px;  
`;




export const Header = () => {
    return (
        <>
           
            <Navbar>
                
                    <div><ImgLogo src={logo} alt="" /></div>
                
                
               <ImgCart>
               <Link to={'/cart'} >
                <i className= "fa fa-shopping-cart" style={{color:'coral'}}></i>
                </Link>

                </ImgCart>
                     
            </Navbar>
            
            </>
    )
}
