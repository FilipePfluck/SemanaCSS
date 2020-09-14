import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #282722;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    width: 200px;
    height: 60px;
    background: none;
    border: 4px solid;
    color: #8257E5;
    font-weight: 700;
    cursor: pointer;
    font-size: 16px;
    position: relative;

    &::before, &::after {
        content: "";
        position: absolute;
        width: 14px;
        height: 4px;
        background: #282722;
        transform: skewX(70deg);
        transition: .4s linear;
    }

    &::before{
        top: -4px;
        left: 10%;
    }

    &::after {
        bottom: -4px;
        right: 10%;
    }

    &:hover::before{
        left: 80%;
        transform: skewX(-70deg);
    }

    &:hover::after{
        right: 80%;
        transform: skewX(-70deg);
    }
`