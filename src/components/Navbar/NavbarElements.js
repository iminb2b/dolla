import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: ease all 0.8s;
    @media screen and (max-width: 960px){
        transition: ease all 0.8s;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;
`;
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    margin-left: 24px;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;
export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        color: #fff;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and ( max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;
export const NavLinks = styled(LinkS)`
    color: #fff;;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (Max-width: 768px){
        display: none;
    }
`;
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-size: 16px;

    &:hover{
        transition: all 0.2 ease-in-out;
        background-color: #fff;
    }
`;
