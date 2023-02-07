import React from 'react';

import '../Banner/Banner.css'
import video from '../../../assets/video/hero.mp4'
import Button from '../../../Button/Button';

const Banner = () => {
    return (
        <section className='mb-0 setover'>
            <div className='overlay'> </div>
           <div className='hero'>
           <video src={video} autoPlay loop muted></video>
           <div className='content'>
                <h2 className='text-[100px]'>Cehpoint Restaurant</h2>
                <p className='text-[60px]'>Healthy and Delicious Food</p>
            </div>
           {/* <button className='btn-design'>View Menu</button> */}
           <div className='mt-96'>
           <Button/>
           </div>
           </div>
          
        </section>
    );
};

export default Banner;