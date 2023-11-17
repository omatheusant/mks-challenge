import { render, screen } from "@testing-library/react"
import { Header } from "./header/Header"

describe('home', () => {
    test('Header is rendering correctly', () => {
        render(<Header/>);
        const myElem = screen.getByTestId('header')
        expect(myElem).toBeInTheDocument()
    })
})