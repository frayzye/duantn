import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
display: flex;
align-items: center;
gap: 24px;
justify-content: flex-start;
border-bottom: 1px solid black;
height: 44px;
margin: 0 auto;
`

export const WrapperButtonMore = styled(ButtonComponent)`
  border: 1px solid -webkit-linear-gradient(#F3B850, #FF954D);
  width: 240px;
  height: 38px;
  border-radius: 6px;
  background: #F3B850;
  color: #fff;
  &:hover {
    color: #fff;
    background: -webkit-linear-gradient(#F3B850, #FF954D);
    
    span {
      color: #fff;
    }
  }
`;


export const WrapperProduct = styled.div`
display: flex;
justify-conten: center;
gap: 15px;
margin-top: 20px;
flex-wrap: wrap;
`