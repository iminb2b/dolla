import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarMenu, SidebarWrapper, SidebarLink, SidebarRoute } from './SidebarElements'
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink smooth spy duration={500} offset={-800} to="about" onClick={toggle}>About</SidebarLink>
                        <SidebarLink smooth spy duration={500} offset={-800} to="discover" onClick={toggle}>Discover</SidebarLink>
                        <SidebarLink smooth spy duration={500} offset={-800} to="services" onClick={toggle}>Services</SidebarLink>
                        <SidebarLink smooth spy duration={500} offset={-800} to="signup" onClick={toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/signin">
                            Sign In
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
