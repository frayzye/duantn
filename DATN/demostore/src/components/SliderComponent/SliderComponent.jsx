
import { Image } from 'antd';
import Slider from 'react-slick';
import React from 'react'

const SliderComponent = ({arrImages}) =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };
    return(
        <Slider {...settings}>
            {arrImages.map((image)=> {
                return(
                    <Image key={image} src={image} alt="slider" preview={false} width="100%" height="400px"/>
                )
            })}
        </Slider>
    )
}

export default SliderComponent