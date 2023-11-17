import { Provider } from "@/context/Provider"
import { Header } from "./header/Header"
import { Products } from "./products/products"

export const Home = () => {
    return (
        <Provider>
            <Header />
            <Products />
        </Provider>
    )
}