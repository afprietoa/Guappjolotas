import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from '../assets/icons/logo.png'


const NavPage = styled.nav`
    background: #fff;
    height: 95px;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    max-width: 600px;
    margin: auto;
    padding: 0 10px 0 80px ;
    /* position: sticky; */
    top:0;
`
const NavContainer = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    height: 80px;
    padding: 30px;
`
const NavLogo = styled(NavLink)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
`
const NavIcon = styled.div`
    width: 85px;
    height:65px;
    background: url(${Logo}) 0 45% no-repeat;
    background-size: 100% 100%;
    cursor: pointer;

`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`

const NavItem = styled.div`
    height: 80px;
    padding-bottom: 8px;

`
const NavItemTxt = styled.div`
    padding-top: 10px;
    padding-right:20px;
    font-size: 25px
`
const NavLinks = styled(NavLink)`
    color: #fa4a0c;
    display: flex;
    align-items: center;
    text-decoration: none;
`

const NavBtnLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`
const NavShop = styled.div`
padding-top:30px;
font-size: 35px; 

 
`;

export {
    NavPage,
    NavContainer,
    NavLogo,
    NavIcon,
    NavMenu,
    NavItem,
    NavItemTxt, 
    NavLinks,
    NavShop,
    NavBtnLink,
    

}