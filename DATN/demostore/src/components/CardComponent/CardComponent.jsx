
// import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReport } from './style'
import {StarOutlined} from '@ant-design/icons'
import logoz from '../../assets/images/logoz.png'
import { WrapperStyleTextSell } from '../ProductDetailComponent/Style'
// import {Image} from 'antd'
const CadrComponent = () =>{
    return(
        <WrapperCardStyle
            hoverable
            headStyle={{width: '200px', height: '200px'}}
            style={{ width: 200 }}
            bodyStyle={{ padding:'10px'}}
            cover={<img alt="example" src="https://sohanews.sohacdn.com/160588918557773824/2022/4/24/photo-1-16507687949151330114102.jpg" />}
            >
                <WrapperImageStyle src={logoz} alt='logo' style={{width: '68px', height: '14px', position: 'absolute', top: 0, left: 0 }}/>
                <StyleNameProduct>Nike</StyleNameProduct>
                <WrapperReport>
                    <span style={{ marginRight:'4px'}}>
                        <span>4.83</span><StarOutlined style={{fontSize:'12px', color: 'yellow'}}/>
                    </span>
                    <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>  
                    
                </WrapperReport>
                <WrapperPriceText>
                     100.000$ 
                    <WrapperDiscountText> -5% </WrapperDiscountText>
                </WrapperPriceText>
            
        </WrapperCardStyle>

        
    )
}

export default CadrComponent