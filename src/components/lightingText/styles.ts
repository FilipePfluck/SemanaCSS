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
    }
`

export const Char = styled.li<CharProps>`
    list-style: none;
    color: #999591;
    font-size: 88px;
    letter-spacing: 15px;
    animation: lighting 1.4s linear infinite;

    @keyframes lighting {
        0% {
            color: #999591;
            text-shadow: none;
        }

        90% {
            color: #999591;
            text-shadow: none;
        }

        100% {
            color: #8257E5;
            text-shadow: 0 0 8px #8257E5, 0 0 48px #642de3;
        }
    }

    &:nth-child(${props => props.number}) {
        animation-delay: ${props => props.number * 0.1}s;
    }

`