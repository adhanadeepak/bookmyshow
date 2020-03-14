import React from 'react';
import Slider from "react-slick";

import './style.css'

import Banner1 from '../../assets/images/banner-images/banner-1.jpg';
import Banner2 from '../../assets/images/banner-images/banner-2.jpg';
import Banner3 from '../../assets/images/banner-images/banner-3.jpg';

function Carousel(props) {

    const Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
            <div>
                <Slider {...Settings}>
                    <div className={`carousel-img-container`}>
                        <img  src={Banner1} alt=""/>
                    </div>
                    <div className={`carousel-img-container`}>
                        <img  src={Banner2} alt=""/>
                    </div>
                    <div className={`carousel-img-container`}>
                        <img  src={Banner3} alt=""/>
                    </div>
                </Slider>
            </div>
    )
}


export default Carousel;
