import React from 'react'
import styles from './contact.module.css'
import imageLogo from '../../assets/images/loogbee.jpg'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import { WrapperStyleTextinput } from './style'

const ContactPage = () => {

    // const navigate = useNavigate()
    // const handleNavigateCart = ()=>{
    //     navigate('/cart')
    // }
    return (
        <div class={styles.container}>
        <div class={styles.delivery_top}>
                <h1>LIÊN HỆ VỚI FOURBEE</h1>
            </div>
        <div class={styles.item_form}>
        <div class={styles.item_left}>
            <WrapperStyleTextinput><input style={{border:'none'}} type="text" id="user" placeholder="Họ và tên của bạn" /></WrapperStyleTextinput>
            <WrapperStyleTextinput> <input style={{border:'none'}} type="text" id="email" placeholder="Email"/></WrapperStyleTextinput>
            <WrapperStyleTextinput><input style={{border:'none'}} type="number" id="number" placeholder="Số điện thoại"/></WrapperStyleTextinput>
          
         
          
    <textarea name="" id="textarea" cols="50" rows="3" placeholder="Nội dung bạn muốn gửi" style={{width:500}}></textarea>
          <input type="submit"/>
        </div>
        <div class={styles.item_right}>
        <img src={imageLogo} preview={false} alt="image-logo" style={{ height: "200px", width: "200px", margin: "15px" }} />
        <p style={{fontSize: 40, color: 'black',fontFamily: 'Arial, Helvetica, sans-serif',marginTop:-20}}>035 904 1257</p>
        <p style={{color:'grey',marginTop:-20}}>Hỗ trợ từ 9:00 - 21:00</p>
        <a href=""><p style={{fontFamily:'light',marginBottom: -20}}><b style={{color:'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Địa chỉ:</b> 137 Nguyễn Thị Thập,Hoà Minh,Liên Chiểu,ĐN</p></a>
        <p style={{fontFamily:'light',marginTop:10,}}><b style={{color:'black',fontFamily:' Arial, Helvetica, sans-serif'}}>Email:</b> FourBee@gmail.com</p>
        </div>
    </div>
    <FooterComponent/>
    </div>    
        
    
    )}

export default ContactPage