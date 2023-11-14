import styled from "styled-components"

interface Props {
    photo: string,
    name: string,
    brand: string,
    price: string
}

export const Card = ({ photo, name, brand, price }: Props) => {
    return (
        <CardContainer>
            <Image src={photo} alt="" />
            <TitleContainer>
                <Title>{brand}{" "}{name} </Title>
                <Price>{price}</Price>
            </TitleContainer>
            <Desc>Redesigned from scratch and completely revised.</Desc>
            <Button><img src="/assets/shop.svg" alt="" />Comprar</Button>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    min-height: 270px;
    position: relative;
    z-index: 0;
`

const Image = styled.img`
    width: 150px;
    margin-bottom: 17px;
`

const TitleContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    
`

const Title = styled.h2`
    font-size: var(--text-md);
    font-weight: 400;
    width: 124px;
    line-height: 15px;
`

const Price = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--text-sm);
    font-weight: 700;

    color: var(--white);
    background-color: var(--enph);

    width: 64px;
    height: 26px;

    position: absolute;
    right: 11.56px;

    border-radius: 5px;
`
const Desc = styled.p`
    font-weight: 300;
    font-size: var(--text-xs);
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 31.91px;
    width: 100%;

    color: var(--white);
    background-color: var(--brand);

    border-radius: 0px 0px 8px 8px;
    border: none;

    font-size: var(--text-sm);
    font-weight: 600;
    text-transform: uppercase;
    gap: 14px;
    
    cursor: pointer;
   
`