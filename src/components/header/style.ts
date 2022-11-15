import styled from "styled-components";

export const Container = styled.header`
    padding: 20px; 
    display: flex; 
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    background: ${props => props.theme.colors.secondary};
    height: 100px;
`
export const Top = styled.div`
    height: 150px;
`