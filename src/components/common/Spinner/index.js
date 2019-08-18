import styled from 'styled-components'

export const Spinner = styled.div`
    height: 100px;
    margin-top: 10px;
    opacity: 1;
    position: relative;
    transition: opacity linear 0.1s;    
    &::before {
        animation: 2s linear infinite spinner;
        border: solid 3px #eee;
        border-bottom-color: #1e4282;
        border-radius: 50%;
        content: "";
        height: 40px;
        left: 50%;
        opacity: inherit;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        transform-origin: center;
        width: 40px;
        will-change: transform;
    }
    @keyframes spinner {
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
         transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
}
`;
