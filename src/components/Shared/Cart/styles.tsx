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
        justify-content: space-between;
        top: 0;
        right: 0;
        width: 486px;
        height: 100vh;
        max-height: 100vh;
        overflow: auto;
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
            margin: 36px 47px 20px;
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

export const BuyButton = styled.button`
    width: 100%;
    min-height: 50px;
    background-color: var(--black);
    color: white;
    border: none;
    cursor: pointer;
    font-size: var(--text-lg);
    text-transform: uppercase;
`

export const CItem = styled.section`
    display: flex;
    align-items: center;
    background-color: var(--white);
    width: 385px;
    height: 101px;
    border-radius: 8px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 5px;
        img {
            width: 60px;
            margin-left: 40px;
        }
        div {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }
        h3 {
            font-size: var(--text-sm);
            font-weight: 400;
        }
        span {
            font-size: var(--text-sm);
            font-weight: 700;
            margin-right: 20px;
        }
        button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 18px;
        height: 18px;
        font-size: var(--text-sm);
        border-radius: 50%;
        background-color: black;
        z-index: 100;
        border: none;
        cursor: pointer;
        position: absolute;
        right: -5px;
        top: -5px;
        }

`