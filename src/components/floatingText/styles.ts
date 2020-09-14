import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #282722;

    h1{
        color: #8257E5;
        text-shadow: 0 0 8px #642de3;
        
        animation: float 2s linear infinite;
        animation-direction: alternate;
    }

    @keyframes float {
        0% {transform: rotate(10deg);}
        5% {transform: rotate(8deg);}
        95% {transform: rotate(-8deg);}
        100% {transform: rotate(-10deg);}
    }
`