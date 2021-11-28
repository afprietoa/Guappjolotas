import styled from 'styled-components';

const CartContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center
`
const ItemCartContainer = styled.div`
    margin: 10px 20px 15px 20px;
    text-align: center;
`
const ImgCart = styled.img`
    margin: auto;
`
const NameCart = styled.h4`
    
    color: black;
`
const PriceCart = styled.h4`
    color: #fa4a0c;
`
const QuantityCart = styled.h4`
    color: #fa4a0c;
`
const ButtonCtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 
const ButtonCtnR = styled.div`
    width: 190px;
    height: 72px;
    border-radius: 20px;
    background-color: #e7e7e7;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 15px;
`
const ButtonRemove = styled.button` 
    outline: black;
    width: 33.33px;
    height: 33.33px;
    border-radius: 20px;
    margin: auto;
    border: 2px solid black;

`
const ButtonPurchase = styled.button`
    width: 200px;
    height: 70px;
    background-color: #fa4a0c;
    color: #fff;
    border-radius: 25px;
    outline: none;
    margin-bottom: 50px;
    border: 1px solid #fa4a0c;
    cursor: pointer;
`
export{
    CartContainer,
    ItemCartContainer,
    ImgCart,
    NameCart,
    PriceCart,
    QuantityCart,
    ButtonCtn,
    ButtonCtnR,
    ButtonRemove,
    ButtonPurchase
}