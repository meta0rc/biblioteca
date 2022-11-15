import styled from "styled-components";
type button = {
    size?: 'small' | 'default'
}
export const Button = styled.button<button>`
    background: ${props => props.theme.colors.gr};
    color: #fff;
    height: 35px;
    padding: 0 10px;
    width: ${props => props.size === 'small' ? '70%' : '100%'};
    border-radius: 3px;
    margin: 3px auto;
    display: block;
    &:hover { 
        cursor: pointer;
        opacity: 0.8;
        transition: 0.5s;
    }
`