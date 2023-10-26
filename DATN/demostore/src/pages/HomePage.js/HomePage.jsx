import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from './Style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import  slider1  from '../../assets/images/slider1.jpg'
import  slider2  from '../../assets/images/slider2.jpg'
import  slider3  from '../../assets/images/slider3.jpg'
import CadrComponent from '../../components/CardComponent/CardComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import NavBarComponent from '../../components/NavBarComponet/NavBarComponent'
import { Col, Row } from 'antd'
import { WrapperNavbar } from '../TypeProductPage/Style'

// import NavBarComponent from '../../components/NavBarComponet/NavBarComponent'
// import { Button } from 'antd'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
const HomePage = () =>{
 
    const arr = ['Giay NIKE'," Giay Boos", 'Giay QUEEN']
    return(
        <>
        <div style={{padding: '0 120px'}}>
            <WrapperTypeProduct>
            {arr.map((item)=> {
                return (
                    <TypeProduct name={item} key={item}/>
                )
            })}
            </WrapperTypeProduct>
            
        </div>
        <div id='container' style={{backgroundColor: '#efefef', padding: '0 120px', height:'100%', }}>
            <SliderComponent arrImages={[slider1, slider2, slider3]}/>

            <div style={{padding:'0 ', background:'#efefef', width:'100%'}}>
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
            </Col>
                </Row>
        
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent:'center', marginTop: '10px'}}>
                <WrapperButtonMore textbutton= "Xem Them" type="outline" styleTextButton={{fontWeight: 500}} />
            </div>
            {/* <NavBarComponent></NavBarComponent> */}
        </div>
        <div>
            <FooterComponent/>
        </div>
        </>
    )
}

export default HomePage