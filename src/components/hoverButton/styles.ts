import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
    background: #282722;

    button{
        border: 2px solid #8257E5;
        background: none;
        color: #8257E5;
        padding: 24px 48px;
        font-size: 24px;
        cursor: pointer;
        transition: 0.5s;
        position: relative;
        outline: 0;
        border-radius: 8px;
        overflow: hidden;

        z-index: 10;
    
        &:hover{
            color: #FFF;
        }

        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0%;
            background: #8257E5;
            z-index: -1;
            border-radius: 0 0 85% 85%;
            transition: 0.75s;
        }

        &:hover::before{
            height: 200%;
        }
    }
`