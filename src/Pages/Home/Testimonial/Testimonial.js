import React from 'react';
import Slider from 'react-slick';
import '../Testimonial/Testimonial.css'
import ava01 from '../../../assets/testimonial/ava-1.jpg'
import ava02 from '../../../assets/testimonial/ava-2.jpg'
import ava03 from '../../../assets/testimonial/ava-3.jpg'
import ava04 from '../../../assets/testimonial/ava-4.jpg'

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
       <div>
       
         <Slider {...settings} className='bg-black p-24 my-20 text-white'>
        <div className="testimonial py-4 px-3 ">
            <p className="text-left des-style leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iusto hic, minima, totam quae quia esse, tempore ex exercitationem ipsum impedit porro. Repudiandae nesciunt provident quasi sit accusantium quae laborum rem itaque, recusandae corrupti temporibus nam quibusdam dolorem vitae autem excepturi debitis animi iste sapiente quidem? Animi quidem sequi cumque?
            </p>

            <div className="mt-5 flex content-center gap-4">
                <img src={ava01} alt="" className='w-24 h-24 rounded-md'/>

                <div>
                    <h6 className='mb-0 mt-3'>Jhon Doe</h6>
                    <p className="section__description">Customers</p>
                </div>
            </div>

        </div>

        <div className="testimonial py-4 px-3">
            <p className="text-left des-style leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iusto hic, minima, totam quae quia esse, tempore ex exercitationem ipsum impedit porro. Repudiandae nesciunt provident quasi sit accusantium quae laborum rem itaque, recusandae corrupti temporibus nam quibusdam dolorem vitae autem excepturi debitis animi iste sapiente quidem? Animi quidem sequi cumque?
            </p>

            <div className="mt-5 flex content-center gap-4">
                <img src={ava02} alt="" className='w-24 h-24 rounded-md'/>

                <div>
                    <h6 className='mb-0 mt-3'>Jhon Doe</h6>
                    <p className="section__description">Customers</p>
                </div>
            </div>

        </div>

        <div className="testimonial py-4 px-3">
            <p className="text-left des-style leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iusto hic, minima, totam quae quia esse, tempore ex exercitationem ipsum impedit porro. Repudiandae nesciunt provident quasi sit accusantium quae laborum rem itaque, recusandae corrupti temporibus nam quibusdam dolorem vitae autem excepturi debitis animi iste sapiente quidem? Animi quidem sequi cumque?
            </p>

            <div className="mt-5 flex content-center gap-4">
                <img src={ava03} alt="" className='w-24 h-24 rounded-md'/>

                <div>
                    <h6 className='mb-0 mt-3'>Jhon Doe</h6>
                    <p className="text-left">Customers</p>
                </div>
            </div>

        </div>

        <div className="testimonial py-4 px-3">
            <p className="text-left des-style leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iusto hic, minima, totam quae quia esse, tempore ex exercitationem ipsum impedit porro. Repudiandae nesciunt provident quasi sit accusantium quae laborum rem itaque, recusandae corrupti temporibus nam quibusdam dolorem vitae autem excepturi debitis animi iste sapiente quidem? Animi quidem sequi cumque?
            </p>

            <div className="mt-5 flex content-center gap-4">
                <img src={ava04} alt="" className='w-24 h-24 rounded-md'/>

                <div>
                    <h6 className='mb-0 mt-3'>Jhon Doe</h6>
                    <p className="section__description">Customers</p>
                </div>
            </div>

        </div>
    </Slider>
       </div>
    );
};

export default Testimonial;