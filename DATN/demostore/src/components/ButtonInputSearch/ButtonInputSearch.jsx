// import { Button } from "antd";
import React from "react";
import {
    SearchOutlined
    
  } from '@ant-design/icons';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ButtonInputSearch = (props) => {
    const{size, placeholder = 'Tìm Kiếm', textButton, bordered, backgroundColorInput = '#fff', backgroundButton = 'rgb(255, 149, 77)', colorButton = '#fff' } = {props}
    return (
        <div style={{display: 'flex', }}>
           <InputComponent
               size={size}
               placeholder={placeholder}
               bordered={bordered}
               style={{backgroundColor: backgroundColorInput}} />
           <ButtonComponent
               size={size}
               styleButton={{background: backgroundButton, border: !bordered && 'none'}}
               icon={<SearchOutlined  style={{color: colorButton}}/>}> {textButton}
               textButton={textButton}
               styleTextButton={{color: colorButton}}
            
            </ButtonComponent>
        </div>
    )
}
export default ButtonInputSearch