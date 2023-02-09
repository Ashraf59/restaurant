import React from 'react';
import Marquee from "react-fast-marquee";
import '../FollowUs/FollowUs.css'

const FollowUs = () => {
    return (
        <div className='announcement'>
           <Marquee speed={60} gradient={false} pauseOnHover>
           <div className='announcement-text text1 media-icon'>
            <span>FOLLOW US ON SOCIAL MEDIA</span>
            <span><i className="ri-facebook-circle-fill"></i></span>

           </div>
           <div className='announcement-text text2 media-icon'>
           <span>FOLLOW US ON SOCIAL MEDIA</span>
           <span><i className="ri-facebook-circle-fill"></i></span>

           </div>
           
           </Marquee>
        </div>
    );
};

export default FollowUs;