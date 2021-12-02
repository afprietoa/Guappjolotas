import styled from 'styled-components';

const CartContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center
`
const ItemCartContainer = styled.div`
    
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 500px;
    height: 110px;
    padding: 20px;
    margin: 20px 20px 10px 20px;
    border-radius: 20px;
    justify-content: normal;
    align-items: normal;
    align-content:normal;
    background-color: #e7e7e7;
`
const TxtCart = styled.div`
    display: inline-block;
`
const ImgCart = styled.img`
    height: 4.3rem;
    margin: auto;
`
const NameCart = styled.h4`
    
    color: black;
`
const PriceCart = styled.h4`
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
    TxtCart,
    NameCart,
    PriceCart,
    ButtonCtn,
    ButtonCtnR,
    ButtonRemove,
    ButtonPurchase
}