'use client';
import * as S from './styles'
import { ProductsApi } from '@/services/apiRequest';
import { Card } from './Card/Card';
import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/AppContext';


export const Products = () => {
    const {products, setProducts} = useContext(AppContext)
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = async () => {
            ProductsApi
                .get('products?page=1&rows=8&sortBy=id&orderBy=ASC')
                .then((res) => {
                    setProducts(res.data.products)
                })
    }
    const ProductCard = (products: any[]) => {
        return products.map((product: any, index: number) => {
            return <Card data={{
                price: product.price,
                photo: product.photo,
                name: product.name,
                brand: product.brand,
                id: index
            }} />
        });
    };
    return (
        <S.Container>
            <S.ProductsGrid>
                 {ProductCard(products)}
            </S.ProductsGrid>
        </S.Container>
    )
}