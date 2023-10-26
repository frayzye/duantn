import React from 'react'
import NavBarComponent from '../../components/NavBarComponet/NavBarComponent'
import CadrComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProduct } from './Style'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const TypeProductPage = () => {
    const onChange = () => {}
    return(
        <div>
        <div style={{padding:'0 120px', background:'#efefef'}}>
            <Row style={{ flexWrap:'nowrap', paddingTop: '10px'}}>
            <WrapperNavbar span={4}>
                <NavBarComponent/>
            </WrapperNavbar>
            <Col span={20}>
                <WrapperProduct>
                    <CadrComponent/>
                    <CadrComponent/>
                    <CadrComponent/>
                    <CadrComponent/>
                    <CadrComponent/>
                    <CadrComponent/>
                </WrapperProduct>
                <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:'center', marginTop:'30px'}} />
            </Col>
        </Row>
        
        </div>
        <FooterComponent/>
        </div>
    )
}
 export default TypeProductPage