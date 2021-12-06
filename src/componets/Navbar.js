import React, { useState } from 'react'
import {
    NavPage,
    NavContainer,
    NavLogo,
    NavIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavShop,
    NavItemTxt

} from '../styles/NavbarStyles'

const Navbar = () => {
    const [click, setClick] = useState(false)


    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)



    return (
        
            <NavPage>
                <NavContainer>
                    <NavLogo to='/home'>
                        <NavIcon />
                    </NavLogo>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItemTxt>
                            <NavLinks to='/login' onClick={closeMenu}>
                                Login
                            </NavLinks>
                        </NavItemTxt>
                        <NavItem>

                            <NavLinks to='/cart' onClick={closeMenu} >
                                <NavShop>
                                    <i className="fa fa-shopping-cart" style={{ color: 'coral' }}></i>
                                </NavShop>
                            </NavLinks>
                        </NavItem>

                    </NavMenu>
                </NavContainer>
            </NavPage>

        
    )
}
export default Navbar