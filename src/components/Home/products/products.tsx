'use client';
import * as S from './styles'
import { ProductsApi } from '@/services/apiRequest';
import { useQuery } from 'react-query';
import { Card } from './Card/Card';

const getProducts = async () => {
    const { data } = await ProductsApi.get('products?page=1&rows=8&sortBy=id&orderBy=ASC')
    return data.products
}

export const Products = () => {
    const { data, status } = useQuery("products", getProducts);
    const ProductCard = (products: any[]) => {
        return products.map((product: any) => {
            return <Card 
                        photo={product.photo}
                        brand={product.brand}
                        name={product.name}
                        price={product.price}
                        />
        });
    };
    return (
        <S.Container>
            <S.ProductsGrid>
                {status === "loading" && <div>Loading...</div>}
                {status === "error" && <div>Error fetching pokemons</div>}
                {status === "success" && <>{ProductCard(data)}</>}
            </S.ProductsGrid>
        </S.Container>
    )
}