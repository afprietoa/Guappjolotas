import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const MainPage = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto; 
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
`

const ContainerMain = styled.div` 
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    align-content:normal;
    margin: 20px 0px 200px 0px;
`

const DetailsLink = styled(NavLink)`
    text-decoration: none;
`

const Cards = styled.div`
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

const ImgCards = styled.div`
    width: 65px;
    height: 75px;
    display: flex;
    align-self: flex-start;
    
    background-size: 100% 100%;
`
const TextCards = styled.div`
    padding-left:20px;
    width: 80%;
    height: 46px;
    top: 33px;
    left: 112px
`
const H2Text = styled.h3`
    background-color: transparent;
    color: #484747;
    margin-top: 8px;  
    font-size: 21px;
    text-align: left;
`
const H2Price = styled.h3`
    background: transparent;
    color: #FA4A0C;
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
`
const HeaderPage = styled.p`
    margin:32px auto;
    font-size: 44px;
    line-height:50px;
    text-align:center;
    text-shadow: 2px 2px 2px #ddd;
    font-weight: 428;
    font-family: 'Inter', sans-serif;
`
const Form = styled.form`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    width: 300px;
    margin-bottom: 20px;
    background-color: #e7e7e7;
    border-radius: 30px;
    color: #9a9a9d;
    border: none;
    font-size: 14px;
`
export {
    MainPage,
    ContainerMain,
    DetailsLink,
    Cards,
    ImgCards,
    TextCards,
    H2Text,
    H2Price,
    Form,
    FormInput,
    HeaderPage
}