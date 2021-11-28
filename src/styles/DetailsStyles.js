import styled from "styled-components"

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const PriceDetail = styled.h2`
    color: #f4aa0c;
`
const ButtonContainer = styled.div`
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
const Cnt = styled.div`
    margin: auto;
`
const ButtonOp = styled.button` 
    outline: black;
    width: 33.33px;
    height: 33.33px;
    border-radius:20px;
    margin:auto;
    border: 2px solid black;
`
const FlavorContainer = styled.div`
    flex-wrap: wrap;
`
const FlavorTxt = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`
const ComboTxt = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`
const ComboMain = styled.div`
    flex-wrap: wrap;
`
const ComboContainer = styled.div` 
    display: flex;
    flex-wrap: wrap;
    width: auto;
`
const ComboPrinter = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 20px;
`
const ComboTxtPrinter =styled.h5`
    align-self: flex-start;
`
const ButtonCart = styled.button`
    width: 280px;
    height: 70px;
    background-color: #fa4a0c;
    color: white;
    border-radius: 25px;
    outline: none;
    margin-bottom: 50px;
    border: 1px solid #fa4a0c;
    cursor: pointer;
`
export {

    DetailsContainer,
    PriceDetail,
    ButtonContainer,
    Cnt,
    ButtonOp,
    FlavorContainer,
    FlavorTxt,
    ComboTxt,
    ComboMain,
    ComboContainer,
    ComboPrinter,
    ComboTxtPrinter,
    ButtonCart

}