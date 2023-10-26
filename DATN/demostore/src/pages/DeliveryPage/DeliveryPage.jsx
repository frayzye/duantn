import React from 'react'
import styles from './delivery.module.css'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const DeliveryPage = () => {

    // const navigate = useNavigate()
    // const handleNavigateCart = ()=>{
    //     navigate('/cart')
    // }
    return (
        <div>
            <div class={styles.containero}>
            <div class={styles.delivery_top}>
                <h1>ĐỊA CHỈ GIAO HÀNG</h1>
            </div>

            <div class={styles.delivery_content_row}>
                <div class={styles.delivery_content_left}>
                    <p>Vui lòng chọn địa chỉ giao hàng</p>
                    <div class={styles.delivery_content_input_top_row}>
                        <div class={styles.delivery_content_input_top_item}>
                            <label for=''> Họ tên</label>
                            <input type='text' required></input>
                        </div>
                        <div class={styles.delivery_content_input_top_item}>
                            <label for=''> Điện thoại</label>
                            <input type="text" required></input>
                        </div>
                        <div class={styles.delivery_content_input_top_item}>
                            <label for=""> Tỉnh/Tp</label>
                            <input type="text" required></input>
                        </div>
                        <div class={styles.delivery_content_input_top_item}>
                            <label for=""> Quận/Huyện</label>
                            <input type="text" required></input>
                        </div>

                        <div class={styles.delivery_content_input_top_item} style={{width:1000}}>
                            <label for=""> Địa chỉ</label>
                            <input type="text" required></input>

                        </div>
</div>

                </div>
                <div class={styles.delivery_content_right}>
                    <table>
                        <tr>
                        <th>
                             <p></p>
                            </th>
                            <th>
                                <p>Sản phẩm</p>
                            </th>
                            <th>
                                <p>Giảm giá </p>
                            </th>
                            <th>
                                <p> Số lượng</p>
                            </th>
                            <th>
                                <p> Size</p>
                            </th>
                            <th>
                                <p>Thành tiền</p>
                            </th>

                        </tr>

                        <tr>
                            <td>
                                <p><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqGU7TIIbzy2rZ0STE-Q8e8KzvWX25RguyQ&usqp=CAU' alt="" style={{width:150}} /> </p>

                            </td>
                            <td>
                                <p>Giày Nike Air Force 1</p>

                            </td>
                            <td>
                                <p>-30% </p>
                            </td>
                            <td>
                                <p>1 </p>
                            </td>
                            <td>
                                <p>M </p>
                            </td>
                            <td>
                                <p>840.000đ </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{fontWeight:'bold'}} colspan="3"> Tổng Tiền</td>
                            <td style={{fontWeight:'bold'}} colspan="3">
                                <p>840.000đ</p>
                            </td>
                            <td></td>
                        </tr>


                    </table>
                    <div class={styles.delivery_content_left_bottom}>
                        <a href="">
                            <p style={{color:'rgb(211, 30, 60)'}}>Quay lại giỏ hàng</p>
                        </a>

                        <a class={styles.button}>Thanh toán và giao hàng</a>
                    </div>
                </div>

            </div>
            </div>
        <div class={styles.container}>
        <div class={styles.payment_content}>
            <div class={styles.thanhtoan}>
                <h1>THANH TOÁN</h1>
            </div>
            <div class={styles.payment_content_left}>


                <div class={styles.payment_content_left_method_payment}>
                    <p>Moi giao dịch đều được bảo mật vào mã hóa.Thông tin thẻ tín dụng sẽ không bao giờ được lưu lại.
                    </p>
                    <div class={styles.payment_content_left_method_payment_item}>
                        <input type="radio"></input>
                        <label for="">Thanh toán bằng thẻ tín dụng <img src='http://127.0.0.1:5501/giaodien/img/1.png'/> </label>

                    </div>
                    <div class={styles.payment_content_left_method_payment_item}>
                        <input type="radio"></input>
                        <label for="">Thanh toán bằng thẻ ATM</label>
                    </div>
                <div class={styles.payment_content_left_method_payment_item}>
                        <input type="radio"></input>
                        <label for="">Thanh toán khi giao hàng</label>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent/>
        </div>
        
        
    
    )}

export default DeliveryPage