import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from'../../assets/images/33.webp'
import imageSmall from'../../assets/images/44.webp'
import {
    StarFilled,
    MinusOutlined,
    PlusOutlined,
    
  } from '@ant-design/icons';
import { WrapperAdressProduct,  WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from "./Style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () =>{
    const onChange = () =>{}
    return(
        <Row style={{ padding: '16px', background:'white', borderRadius: '4px'}}>
            <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight:'8px'}}>
                <Image style={{width:'100%'}} src={imageProduct} alt="image product" preview={false}/>
                <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                    <Col span={4}>
                    <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false}/>
                    </Col>
                    <Col span={4}>
                    <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false}/>
                    </Col>
                    <Col span={4}>
                    <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false}/>
                    </Col>
                    <Col span={4}>
                    <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false}/>
                    </Col>
                    <Col span={4}>
                    <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false}/>
                    </Col>
                    <Col span={4}>
                    <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false}/>
                    </Col>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft: '10px'}}>
                <WrapperStyleNameProduct>Tình Yêu Của Thánh</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54'}}/>
                    <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54'}}/>
                    <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54'}}/>
                    <WrapperStyleTextSell> |Da ban 1000+ </WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>
                        200.000Đ
                    </WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAdressProduct>
                    <span>Giao den </span>
                    <span className="address">Q.1, Lien Chieu,  Da Nang</span> - 
                    <span className="change-adress">Doi dia chi</span>
                </WrapperAdressProduct>
                <div style={{margin: '10 0 20px', padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
                    <div style={{marginTop:'30px'}}>
                        So luong
                    </div>
                    <WrapperQualityProduct>
                        <button style={{border: 'none', background: 'transparent'}}>
                            <MinusOutlined style={{color: '#000', fontSize: '20px'}} />
                        </button>
                        <WrapperInputNumber  defaultValue={1} onChange={onChange}/>
                        <button style={{border: 'none', background: 'transparent'}}>
                            <PlusOutlined style={{color: '#000', fontSize: '20px'}}/>
                        </button>
                    
                    </WrapperQualityProduct>
                </div>
                <div style={{ display: 'flex', alignItems:'center', gap:'12px', marginTop: '60px', justifyContent: 'center'}}>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                        textButton={'Chon Mua'}
                        styleTextButton={{
                            color: 'white',
                            fontSize: '15px',
                            fontWeight: '700'
                        }}>
                    </ButtonComponent>

                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'white',
                            height: '48px',
                            width: '220px',
                            border: '1px solid rgb(13, 92, 182)',
                            borderRadius: '4px'
                        }}
                        textButton={'Mua Tra Sau'}
                        styleTextButton={{
                            color: 'rgb(13, 92, 182)',
                            fontSize: '15px'
                        }}>
                    </ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}
export default ProductDetailComponent