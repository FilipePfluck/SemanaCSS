import styled from 'styled-components'

interface SpanProps {
    times: number
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;

    section{
        width: 100%;
        height: 100%;
        background: #282722;
        color: #8257E5;
        box-sizing: border-box;
        overflow: hidden;
        position: absolute;
    }
    .wrapper {
        height: 100%;
        width: 50%;
        background: #8257E5;
        overflow: hidden;
        color: #edede8;
        position: absolute;
        top: 0;
        left: 0;
        border-right: 2px solid #262626;
    }
`

export const Span = styled.span<SpanProps>`
    display: flex;
    flex: 1;
    position: absolute;
    top: 30%;
    white-space: nowrap;
    font-size: 12em;
    line-height: 220px;
    overflow: hidden;
    font-family: "arial black";
    animation: moving 15s linear infinite;
    animation-delay: ${props => props.times * 7.5}s;

    color: transparent;

    @keyframes moving
    {
        0%{
            transform: translate(100%, 0%);
            color: inherit;
        }
        100%{
            transform: translate(-100%, 0%);
            color: inherit;
        }
    }
`