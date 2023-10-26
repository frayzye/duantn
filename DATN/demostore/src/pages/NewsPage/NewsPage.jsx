import React from 'react';
import './News.css'
import { Footer } from 'antd/es/layout/layout';
import FooterComponent from '../../components/FooterComponent/FooterComponent';

const NewsPage = () => {
    return (
        <div class="container-new">
        <div class="content-news">
            <div class="content-top" >
                <div class="content-top-left">
                    <div class="news-container">
                        <img src="https://oreni.vn/uploads/contents/loi-ich-cua-chay-bo-la-gi.jpg" style={{ width: '100%' }}></img>
                        <div class="news-content">
                            <p>Nike và Adidas: Cuộc chiến trên đường chạy Marathon</p>
                        </div>
                    </div>
                </div>
                <div class="content-top-right">
                    <div class="news-container">
                        <img src="https://giaysneaker.store/media/wysiwyg/slidershow/home-12/banner_ADIDAS.jpg" style={{ width: '100%' }}></img>
                        <div class="news-content">
                            <p>Joel Embiid, Julius Randle và những ngôi sao NBA hợp tác với hãng giày Skechers</p>
                        </div>
                    </div>
                    <div class="right-bottom">
                        <div class="news-container">
                            <img src="https://giaysneaker.store/media/wysiwyg/slidershow/home-12/banner_CONVERSE.jpg" style={{ width: '100%' }}></img>
                            <div class="news-content" >
                                <p>9 ĐÔI SNEAKERS BÙNG NỔ NHẤT TRONG NĂM 2022</p>
                            </div>
                        </div>
                        <div class="news-container">
                            <img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/9/3/1237059/Nike-Football-1-02.jpeg" style={{ width: '100%' }}></img>
                            <div class="news-content"  >
                                <p>Nike Hàn Quốc quảng cáo Nike Air Max với NewJeans</p>
                            </div>
                        </div>

                    </div>
                </div>





            </div>
            <div class="content-bottom">
                <section class="content-left">
                    <a href="https://kenh14.vn/2023-la-thoi-cua-sneaker-bac-ngay-cang-hot-khong-chung-se-khien-sneaker-trang-ra-chuong-ga-20230913155236835.chn">
                        <div class="blog-content">
                            <div class="img">
                                <img src="https://afamilycdn.com/150157425591193600/2023/9/13/photo-3-16945944889451042966551-1694596431324-1694596431462986100371.jpeg" width="200px" height="150px" style={{ objectFit: 'cover' }} alt=""></img>
                            </div>
                            <div class="noidung">
                                <span>20/11/2023 &emsp; </span>
                                <h3>2023 là thời của sneaker bạc: Ngày càng hot, không chừng sẽ khiến sneaker trắng "ra chuồng gà"</h3>
                                <p>Sneaker bạc chính xác là một trong những hot item xuất sắc nhất năm 2023..... </p>

                            </div>
                        </div>
                    </a>

                    <a href='https://vnexpress.net/5-kieu-giay-the-thao-duoc-ua-chuong-thu-dong-2023-4660452.html'>
                        <div class="blog-content">
                            <div class="img">
                                <img src="https://i1-giaitri.vnecdn.net/2023/10/03/xu-huong-giay-the-thao-1-1696321774.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=wcYIopYjuORQLbxzpRjpTQ" width="200px" height="150px" style={{ objectFit: 'cover' }} alt=""></img>
                            </div>
                            <div class="noidung">
                                <span>20/11/2023 &emsp; </span>
                                <h3>5 kiểu giày thể thao được ưa chuộng Thu Đông 2023</h3>
                                <p>Giày chạy bộ, giày đá bóng, giày bóng rổ là xu hướng hot mùa lạnh cuối năm nay..... </p>

                            </div>
                        </div>
                    </a>

                    <a href='https://vtc.vn/nhung-kieu-giay-cong-so-de-phoi-do-nhat-cac-nang-nen-sam-ar771717.html'>
                        <div class="blog-content">
                            <div class="img">
                                <img src="https://img.mwc.com.vn/files/Images/top-10-mau-snacker-1.png" width="200px" height="150px" style={{ objectFit: 'cover' }} alt=""></img>
                            </div>
                            <div class="noidung">
                                <span>20/11/2023 &emsp;</span>
                                <h3>Những kiểu giày công sở dễ phối đồ nhất các nàng nên sắm</h3>
                                <p>Nàng công sở muốn nâng tầm phong cách thì hãy bổ sung cho mình những mẫu giày sau đây nhé.....</p>

                            </div>
                        </div>
                    </a>

                    <a href='https://phunutoday.vn/4-kieu-giay-bet-vua-giu-am-vua-tang-diem-sanh-dieu-cho-nang-vao-mua-lanh-d386318.html'>
                        <div class="blog-content">
                            <div class="img">
                                <img src="https://hotgirlshop.vn/Uploads/Products/20072022/News/2072011424-giay-nu-LV-louis-vuitton-time-out-sneaker-shoes.jpg" width="200px" height="150px" style={{ objectFit: 'cover' }} alt=""></img>
                            </div>
                            <div class="noidung">
                                <span>20/11/2023 &emsp; </span>
                                <h3>4 kiểu giày bệt vừa giữ ấm vừa tăng điểm sành điệu cho nàng vào mùa lạnh</h3>
                                <p>Mùa đông là thời điểm những đôi giày bệt được mọi người đặc biệt ưa chuộng. Ngoài công dụng giúp giữ ấm phần chân, những đôi giày bệt còn được thiết kế với đa dạng kiểu dáng.....</p>

                            </div>
                        </div>
                    </a>

                </section>
                <section class="right-content">
                    <div class="top-blog">
                        <h3>Video</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GdlSWFyYA8s?si=KxGzfhUD9wTDTsS_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="bai-viet">
                        <h3>Bài viết</h3>
                        <p>Chọn một đôi giày phù hợp sẽ giúp thăng hạng vẻ ngoài của bạn.</p>
                    </div>
                </section>
            </div>
            
        </div>
        <FooterComponent/>
        </div>

    )
}

export default NewsPage