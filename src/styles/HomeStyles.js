import styled from 'styled-components'
import {Link} from 'react-router-dom'

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

const DetailsLink = styled(Link)`
    text-decoration: none;
`

const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 810px;
    height: 110px;
    padding: 20px;
    margin: 20px 20px 10px 20px;
    border-radius: 20px;
    justify-content: normal;
    align-items: normal;
    align-content:normal;
    background-color: #e7e7e7;
`

const ImgCard = styled.div`
    width: 85px;
    height: 65px;
    display: flex;
    align-self: flex-start;
    background-size: 100% 100%;
`
const TextCard = styled.div`
    width: 184px;
    height: 46px;
    top: 33px;
    left: 112px
`
const H2Text = styled.h3`
    background-color: transparent;
    color: #484747;
    margin-top: 8px;  
`
const H2Price = styled.h3`
    background: transparent;
    color: #fa4acf;
`
const HeaderPage = styled.p`
    margin:20px 0px 25px 1px;
    font-size: 20px;
    font-weight: 700;
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
    Card,
    ImgCard,
    TextCard,
    H2Text,
    H2Price,
    Form,
    FormInput,
    HeaderPage
}