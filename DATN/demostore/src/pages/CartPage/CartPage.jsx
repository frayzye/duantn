import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import FooterComponent from '../../components/FooterComponent/FooterComponent'
// import { useActionData, useNavigate } from 'react-router-dom'

const CartPage = () => {

    const navigate = useNavigate()
    const handleNavigateDelivery = () => {
        navigate('/delivery')
    }
    return (
        <div>
            <div class="container">
                <div class="content">
                    <h3 style={{ padding: '20px' }}>Shopping Cart</h3>
                    <h3 style={{ padding: '20px', textAlign: 'right' }}>4 Items</h3>
                </div>
                <div class="content-main">
                    <div class="content-deital">
                        <table>
                            <tr>
                                <th style={{ width: '30%' }}>Sản Phẩm</th>
                                <th style={{ width: '10%' }}>Số Lượng</th>
                                <th style={{ width: '10%' }}>Giá</th>
                                <th style={{ width: '10%' }}>Tổng</th>
                                <th style={{ width: '10%' }}></th>
                            </tr>
                            <tr>
                                <td><img src='https://giaymt.com.vn/wp-content/uploads/2022/10/giay-the-thao-nu-MY861-3.jpg'></img>
                                    <div style={{ float: 'right', position: 'relative', top: '30px' }}>
                                        <h4 style={{ width: '300px', wordWrap: 'break-word' }}>Giày thể thao nữ MY861</h4>
                                        <p>Màu: <span>Trắng nâu</span> / Size: <span>36</span></p>
                                    </div>
                                </td>
                                <td><input type='number' min={1} style={{ width: '50%' }}></input></td>
                                <td>200 VNĐ</td>
                                <td>400 VNĐ</td>
                                <td><button style={{ backgroundColor: '#66B7FF' }}>Sửa</button><button style={{ backgroundColor: '#FF5555' }}>Xóa</button></td>
                            </tr>
                            <tr>
                                <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqGU7TIIbzy2rZ0STE-Q8e8KzvWX25RguyQ&usqp=CAU'></img>
                                    <div style={{ float: 'right', position: 'relative', top: '30px' }}>
                                        <h4 style={{ width: '300px', wordWrap: 'break-word' }}>Giày Nike Air Force 1</h4>
                                        <p>Màu: <span>Trắng đen xanh</span> / Size: <span>40</span></p>
                                    </div>
                                </td>
                                <td><input type='number' min={1} style={{ width: '50%' }}></input></td>
                                <td>200 VNĐ</td>
                                <td>400 VNĐ</td>
                                <td><button style={{ backgroundColor: '#66B7FF' }}>Sửa</button><button style={{ backgroundColor: '#FF5555' }}>Xóa</button></td>
                            </tr>
                            <tr>
                                <td><img src='https://cf.shopee.vn/file/5195e26631ec78a10839cae80c4d2d56'></img>
                                    <div style={{ float: 'right', position: 'relative', top: '30px' }}>
                                        <h4 style={{ width: '300px', wordWrap: 'break-word' }}>Balenciaga Triple S Curry (Women's)</h4>
                                        <p>Màu: <span>Trắng vàng</span> / Size: <span>39</span></p>
                                    </div>
                                </td>
                                <td><input type='number' min={1} style={{ width: '50%' }}></input></td>
                                <td>200 VNĐ</td>
                                <td>400 VNĐ</td>
                                <td><button style={{ backgroundColor: '#66B7FF' }}>Sửa</button><button style={{ backgroundColor: '#FF5555' }}>Xóa</button></td>
                            </tr>
                            <tr>
                                <td><img src='https://shopgiayreplica.com/wp-content/uploads/2020/10/giay-nike-air-jordan-1-low-4.jpg'></img>
                                    <div style={{ float: 'right', position: 'relative', top: '30px' }}>
                                        <h4 style={{ width: '300px', wordWrap: 'break-word' }}>Giày Nike Air Jordan 1 Low Shadow Rep 11 </h4>
                                        <p>Màu: <span>Trắng đen</span> / Size: <span>38</span></p>
                                    </div>
                                </td>
                                <td><input type='number' min={1} style={{ width: '50%' }}></input></td>
                                <td>200 VNĐ</td>
                                <td>400 VNĐ</td>
                                <td><button style={{ backgroundColor: '#66B7FF' }}>Sửa</button><button style={{ backgroundColor: '#FF5555' }}>Xóa</button></td>
                            </tr>
                        </table>
                    </div>

                    <div class="content-button">
                        <h3>Tổng Tiền: <span>3200</span> VNĐ</h3>
                        <div><button class="button_1">Tiếp tục mua sắm</button></div>
                        <div><button  class="button_2" onClick={handleNavigateDelivery} >Thanh toán</button></div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default CartPage