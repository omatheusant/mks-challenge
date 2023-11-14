"use client";

import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100px;
    background-color: var(--brand);
    justify-content: space-between;
`
export const Logo = styled.h1`
    color: var(--white);
    font-size: var(--text-2xl);
    font-weight: 600;
    margin-left: 65px;
        span{
            font-weight: 300;
            font-size: var(--text-lg);
            margin-left: 10px;
        }
`

