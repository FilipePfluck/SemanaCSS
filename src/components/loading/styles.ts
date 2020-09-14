import styled from 'styled-components'

export const Container = styled.div`
    margin: 0;
    padding: 0;
    background: #282722;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .loader{
        width: 150px;
        height: 150px;
        position: relative;
    }

    span{
        position: absolute;
        width: 35px;
        height: 35px;
        background-color: #8257E5;
        border-radius: 4px;
        animation: load 2s linear infinite;

    }

    span:nth-child(3){
        animation-delay: 0.8s;
    }

    span:nth-child(2){
        animation-delay: 1.6s;
    }

    span:nth-child(1){
        animation-delay: 2.4s;
    }


    @keyframes load
    {
        0% {top: 0; left: 0;}

        12.5% { top: 0; left: 33%;}

        25% { top: 0; left: 66%;}

        37.5% { top: 33%; left: 66%;}

        50% { top: 66%; left: 66%;}

        62.5% { top: 66% ; left: 33%;}

        75% { top: 66% ; left: 0;}

        82.5% { top: 33%; left: 0;}

        100% { top: 0; left: 0;}
    }
`
