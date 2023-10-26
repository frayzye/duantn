import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import {BiLogoLinkedin,BiLogoPinterestAlt} from 'react-icons/bi';
import styles from './footer.module.css'
import { useNavigate } from 'react-router-dom';
import { Image } from "antd";
import imageLogo from '../../assets/images/loogbee.jpg'
const FooterComponent = ()=>{
    const navigate = useNavigate()
    const handleNavigateContact = () => {
        navigate('/contact')
    }
    return(
        <div className={styles.new_footer_area} style={{ background:'-webkit-linear-gradient(#F3B850, #FF954D)'}}>
            <div class={styles.new_footer_top}>
            <div class={styles.container}>
                <div class={styles.col}>
                   
                    <div class={styles.col_lg_3_col_md_6}>
                        <div class={styles.f_widget_about_widget}>
                        <Image src={imageLogo} preview={false} alt="iamge-logo" height="150px" width="150px" />
                            <ul class={styles.f_list} style={{listStyleType:'none'}}>
                                <li><a href="#">Nguyễn Thị Thập- Hoà Minh-Liên Chiểu-Đà Nẵng</a></li>
                                <li><a href="#">Hotline:0359041257</a></li>
                                <li><a href="#">Email:FourBee@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={styles.col_lg_3_col_md_6}>
                        <div class={styles.f_widget_about_widget} >
                            <h3 class={styles.f_title}>Help</h3>
                            <ul class={styles.f_list} style={{listStyleType:'none'}}>
                                <li><a style={{cursor:'pointer'}} onClick={handleNavigateContact}>Contact</a></li>
                                <li><a href="#">Term &amp; conditions</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={styles.col_lg_3_col_md_6}>
                        <div class={styles.f_widget_social_widget}>
                            <h3 class={styles.f_title}>Team Solutions</h3>
                            <div class={styles.f_social_icon}>
                                <a href="#" ><FaFacebookF/></a>
                                <a href="#" ><BsTwitter/></a>
                                <a href="#"><BiLogoLinkedin/></a>
                                <a href="#"><BiLogoPinterestAlt/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={styles.footer_bg}>
                <div class={styles.footer_bg_one}></div>
                <div class={styles.footer_bg_two}></div>
            </div>
            <div class={styles.footer_bottom}>
            <div class={styles.container}>
                <div class={styles.row_align_items_center}>
                    <div class={styles.col_lg_6_col_sm_7}>
                        <p class={styles.mb_0_f_400} style={{color:'white'}}> &copy;Copyright by FOUR BEE</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
             {/* <h4 style={{textAlign:'center', color:'white', padding: '30px 0', marginBottom:'-20px'}}>Copyright @FOUR_BEE Shop</h4> */}
        </div>
    )
}
export default FooterComponent