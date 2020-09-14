import styled from 'styled-components'

interface CharProps {
    number: number
}

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #282722;

    ul{
        margin: 0;
        padding: 0;
        display: flex;

        &:hover li{
            transform: rotate(45deg) translateY(-100px);
            opacity: 0;
            filter: blur(24px);
        }
    }
`

export const Char = styled.li<CharProps>`
    list-style: none;
    color: #8257E5;
    font-size: 88px;
    transition: 0.5s;

    &:nth-child(${props => props.number}) {
        transition-delay: ${props => props.number * 0.1}s;
    }

`