import styled from "styled-components";

export const ContainerCarrosel = styled.div`
    position: relative;
    background: #fff;

    padding: 10px;
`
export const ContainerNavCarrosel = styled.div`
    height: 100%;
    width: 90%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ContainerNavCarroselChildren = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ImagesCarrosel = styled.div`
    display: flex;
    overflow: hidden;
    width: 230px;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
`
export const ImageCarrosel = styled.img`
    width: 200px;
    object-fit: cover;
    margin: 0 10px;

`
export const ContainerContentCarrosel = styled.div`
    display: flex;
    flex-direction: column;
    
`