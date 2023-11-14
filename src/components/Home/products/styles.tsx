"use client"

import styled from 'styled-components'

export const Container = styled.div`
    display: flex ;
    justify-content: center;
    align-content: center;
    
`

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 22px;
    grid-row-gap: 31px; 

`

