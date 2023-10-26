import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
height: 64px;
width: 64px;
`
export const WrapperStyleImageCol = styled(Col)`
flex-basis: unset;
display: flex;
`
export const WrapperStyleNameProduct = styled.h1`
margin: 0px 0px 4px;
color: rgb(36,36,36);
font-size: 24px;
font-weight: 300;
line-height: 32px;
word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
font-size: 15px;
line-height: 24px;
color: rgb(120,120,120);`

export const WrapperPriceProduct = styled.div`
background-color: rgb(258, 250, 250);
border-radius: 4px;
`
export const WrapperPriceTextProduct = styled.h1`
font-size: 32px;
line-height: 40px;
margin-right; 8px;
font-weight: 500;
padding: 10px;
margin-top: 10px;
`
export const WrapperAdressProduct = styled.div`
span.address{
    font-size: 17px;
    line-height: 40px;
    margin-right; 8px;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;

};
span.change-adress{
    color: rgb(11, 116, 229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
}

`
export const WrapperQualityProduct = styled.div`
display: flex;
gap: 4px;
align-items: center;
border-radius: 2px;
border: 1px solid #ccc;
width: 120px;
border-radius: 4px;
margin-top: 10px
`


export const WrapperInputNumber = styled(InputNumber)`
&.ant-input-number.ant-input-number-sm{
    width: 60px;
    border-top: none;
    border-bottom: none;
    &.ant-input-number-handler-wrap{
        display: none !important;
    }
}
`