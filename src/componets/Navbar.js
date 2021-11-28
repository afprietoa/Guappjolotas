import React, {useState, useEffect} from 'react'
import {
    NavPage,
    NavContainer,
    NavLogo,
    NavIcon,
    NavMenu,
    NavItem, 
    NavLinks,
    NavShop

} from '../styles/NavbarStyles'

export const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <NavPage>
            <NavContainer>
                <NavLogo to='/home'>
                    <NavIcon />
                </NavLogo>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavItem>
                            
                            <NavLinks to='/cart' onClick={closeMenu} >
                            <NavShop>
                            <i className= "fa fa-shopping-cart" style={{color:'coral'}}></i>
                            </NavShop>
                            </NavLinks>
                        </NavItem>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </NavPage>
            
        </>
    )
}
