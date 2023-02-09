import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Slider/Slider1.css'
import Button from '../../../Button/Button';

const Slider1 = () => {
    const settings = {
        
        fade:true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    }
  return (
    <Slider {...settings} className='hero__slider mt-32'>
    <div className="slider__item slider__item-01">
        <div className=''>
            <div className="slider__content" data-aos="fade-up"
     data-aos-easing="center-bottom"
     data-aos-duration="2000">
                <h4 className="text-light mb-3">Price BDT 120.00 </h4>
                <h1 className="text-light">Order Now & Get 50% Off</h1>
                   <p className="mb-4 text-center mx-auto leading-8">Burgers are one of the most popular foods in America and on Instagram,
                     with almost 20 million uses of the #burger and #burgers hashtags.
                      But even though they’re popular,
                      it can be hard to come up with something witty to post along with that juicy burger photo</p> 
                <Button>Order Now</Button>
            </div>
        </div>
    </div>

    <div className="slider__item slider__item-02">
        <div className=''>
            <div className="slider__content" data-aos="fade-up"
     data-aos-easing="center-bottom"
     data-aos-duration="2000">
                <h4 className="text-light mb-3">Price BDT 180.00 </h4>
                <h1 className="">Order Now & Get 50% Off</h1>
                <p className="mb-4 text-center mx-auto leading-8">Burgers are one of the most popular foods in America and on Instagram,
                     with almost 20 million uses of the #burger and #burgers hashtags.
                      But even though they’re popular,
                      it can be hard to come up with something witty to post along with that juicy burger photo</p> 

                <Button>Order Now</Button>
            </div>
        </div>
    </div>

    <div className="slider__item slider__item-03">
        <div className=''>
            <div className="slider__content" data-aos="fade-up"
     data-aos-easing="center-bottom"
     data-aos-duration="2000">
                <h4 className="text-light mb-3">Price BDT 150.00 </h4>
                <h1 className="">Order Now & Get 50% Off</h1>
                <p className="mb-4 text-center mx-auto leading-8">Burgers are one of the most popular foods in America and on Instagram,
                     with almost 20 million uses of the #burger and #burgers hashtags.
                      But even though they’re popular,
                      it can be hard to come up with something witty to post along with that juicy burger photo</p> 

                <Button>Order Now</Button>
            </div>
        </div>
    </div>
  </Slider>
    );
};

export default Slider1;