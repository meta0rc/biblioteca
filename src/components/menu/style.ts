import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    right: 0;
    width: 300px;
    z-index: 1;
    background: ${props => props.theme.colors.secondary};
    height: 100vh;
    top: 0;
    padding: 20px;
    transition: 1s;
`
export const Container = styled.div`
    svg { position: relative; z-index: 2; right: 0; top: 0; z-index: 2; margin: 25px; color: ${props => props.theme.colors.gr}}; 
`
export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
`
export const MenuItem = styled.li`
    padding: 10px;
    margin: 10px;
`
export const Link = styled.a`
    color: #ebebeb;
`