import styled from "styled-components";

export const CartBtn = styled.button`
    display: flex;
    align-items: center;
    margin-right: 88px;
    width: 90px;
    height: 45px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
        img{
            margin-left: 15px;
        }

        div{
            font-size: 1.8rem;
            font-weight: 700;
            margin-left: 16px;
        }
`

export const CartContainer = styled.div`
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 0;
        right: 0;
        width: 486px;
        height: 100vh;
        box-shadow: -3px 0px 16px 1px rgba(0, 0, 0, 0.51);
        background: var(--brand);
        transition: 0.3s ease-in-out;
        transform: translateX(100%);
        z-index: 1000;

        &.active {
            transform: translateX(0%);

        }

        h1{
            font-size: var(--text-xl);
            color: white;
            font-weight: 700;
            margin: 36px 47px 64px;
        }
`

export const CloseBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 38px;
    height: 38px;
    font-size: var(--text-lg);
    border-radius: 50%;
    background-color: black;
    z-index: 100;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 22px;
    top: 39px;
`