import React from 'react';
import '../Offer/Offer.css'
import Marquee from "react-fast-marquee";

const Offer = () => {
    return (
        <div className='announcement'>
           <Marquee speed={60} gradient={false} pauseOnHover>
           <div className='announcement-text text1'>
            <span>Couple Buffe Offer 50% Off ||</span>
            <span>Thai Food Offer 50% Off ||</span>

           </div>
           <div className='announcement-text text2'>
            <span>Mandarin Food Offer 50% Off ||</span>
            <span>Chiness Food Offer 50% Off ||</span>

           </div>
           </Marquee>
        </div>
    );
};

export default Offer;