import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavLogo, NavbarContainer, NavBtn, NavBtnLink, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarElements'
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false)
        }
    }
    const scrollHome = () => {
        scroll.scrollToTop();
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={scrollHome}>
                        dolla
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks smooth spy duration={500} offset={-800} to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth spy duration={500} offset={-800} to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth spy duration={500} offset={-800} to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth spy duration={500} offset={-800} to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
