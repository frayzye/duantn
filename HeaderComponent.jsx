import React from 'react'
import {Badge, Col} from 'antd'
import {WrapperHeader, WrapperHeaderTitle} from './style'
import {WrapperTextHeader} from './style'
import {WrapperHeaderAccound, WrapperTextHeaderSmall} from './style'
import { useNavigate } from 'react-router-dom';

// import Search from 'antd/es/input/Search'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
    
  } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { useSelector } from 'react-redux'

const HeaderComponent = () =>{

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const handleNavigateLogin = () => { 
        navigate('/sign-in')
    }
    console.log('user', user)
    const handleNavigateProduct = () => { 
        navigate('/type')
    }
    const handleNavigateNews = () => { 
        navigate('/news')
    }
    const handleNavigateHome = () => { 
        navigate('/')
    }
    const handleNavigateCart = () => { 
        navigate('/cart')
    }
    return(
        <div>
            <WrapperHeader>
                <Col span={6}><WrapperTextHeader onClick={handleNavigateHome}>FOUR_BEE</WrapperTextHeader></Col>
                <Col span={12}>
                <ButtonInputSearch
                 size ="large"
                 textButton= "Tìm Kiếm"
                 placeholder="input search text"/>
                </Col>
                <Col span={6} style={{display: 'flex', gap:'20px', alignItems: 'center'}}>
                <WrapperHeaderTitle>
                     <span onClick={handleNavigateProduct}>Sản Phẩm</span> <br></br>
                     <span onClick={handleNavigateNews}>Liên Hệ</span>
                </WrapperHeaderTitle>
                <WrapperHeaderAccound>
                    {user?.name? (
                        <div>{user.name}</div>
                    ):(
                      <div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
                        <span>Đăng Nhập</span>
                        <div>
                           <span><UserOutlined /></span>
                           <span>Tài Khoản</span>
                           <CaretDownOutlined />
                        </div>
                    </div>
                    )}
                    
                </WrapperHeaderAccound>
                <Badge count={4} size='small'>
                    <ShoppingCartOutlined style={{fontSize:'20px', color: '#fff'}}/>
                </Badge>
                <WrapperTextHeaderSmall onClick={handleNavigateCart}>Giỏ Hàng</WrapperTextHeaderSmall>
                
               </Col>
            </WrapperHeader>
           
        </div>
    )
}

export default HeaderComponent 