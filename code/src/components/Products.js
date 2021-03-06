import React from 'react'
import { useSelector } from 'react-redux'
import mglass from 'assets/mglass.jpg'
import styled from "styled-components/macro"


const Icon = styled.img`
    height:30px;
    margin: 5px 0 0 20px;
`

const Title = styled.h1`
    margin:0;
    font-size:40px;

    @media (max-width: 768px) {
        font-size:30px;
    }
`

const Wrap = styled.div`
    display:block;
    margin-top: 5%;
    padding:50px;
    border-radius:8px;
    background-color:white;
   
    @media (max-width: 768px) {
        width:auto;
        padding:10px;
    }
`

const TitleDiv = styled.div`
    display:flex;
    margin-bottom:40px;

    @media (max-width: 768px) {
        margin-bottom:30px;
    }
`

const Name = styled.p`
    font-size:22px;
`

const TextInfo = styled.p`
    font-size:20px;
`

const Image = styled.img`
    border-radius:8px;
   
    @media (max-width: 768px) {
        width:60%;
    }
`

export const Products = () => {
    const products = useSelector(state => state.facts.products)
    console.log('prod', products)

    if (!products.length) {
        return null
    }

    return products.map(({ status, product, code }, index) => (
        <Wrap key={`${code}_${index}`}>
            {status === 1 && (
                <>
                    <TitleDiv>
                        <Title>Search results </Title>
                        <Icon alt="glass" src={mglass} />
                    </TitleDiv>
                    <Name><strong>Name of product: </strong>{product && product.product_name}</Name>
                    <TextInfo><strong>Brand: </strong> {product && product.brands}</TextInfo>
                    <TextInfo><strong>Country of origin: </strong> {product && product.countries}</TextInfo>
                    <TextInfo><strong>Ingredients: </strong></TextInfo> <Image alt="ingrediens" src={product && product.image_ingredients_url} />
                </>)}
            {status === 0 && <h1>Product not found</h1>}
        </Wrap>
    ))
}