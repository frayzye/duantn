import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavBarComponent = () => {
    const onChange =()=>{

    }
    const renderContent = (type, options) => {
        switch(type){
            case 'text':
                return options.map((option) => {
                    return <WrapperTextValue>{option}</WrapperTextValue>
                })
            case 'checkbox':
                return (
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {options.map((option) => {
                        return (
                            <Checkbox value={option.value}>{option.Lable}</Checkbox>
                        )
                    })}
                
                <Checkbox value="B">B</Checkbox>
            </Checkbox.Group>
            )
            case 'start':
                return options.map((option) => {
                    console.log('check', option)
                        return(
                            <>
                               <div style={{ display: 'flex', grap: '4px'}}>
                                   <Rate style={{fontSize: '12px', }} disabled defaultValue={option} />
                                   <span>{`tu ${option} sao`}</span>
                                </div>
                            </>
                         )
                }
            )
            case 'price': 
                return options.map((option) => {
                    return(
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                }
            )   
                
            default:
                return{}
        }
    }
    return(
        <div>
            <WrapperLabelText>Lable</WrapperLabelText> 
            <WrapperContent>
                {renderContent('text', ['NIKE', 'BOOD', 'ADIAS'])}
            </WrapperContent>  
            <WrapperContent>  
                {renderContent('checkbox', [
                    {value: 'a', Lable: 'A'}, 
                    {value: 'b', Lable: 'B'}
                ])}
           </WrapperContent>
           {/* <WrapperContent>  
                {renderContent('start', [
                    2,3
                ])}
           </WrapperContent>
           <WrapperContent>  
                {renderContent('price', [
                    'duoi 49', 'tren 50.000'
                ])}
           </WrapperContent> */}
            
        </div>
    )
}

export default NavBarComponent