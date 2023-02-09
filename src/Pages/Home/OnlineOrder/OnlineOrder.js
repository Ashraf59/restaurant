import React, { useEffect, useState } from 'react';
import Button from '../../../Button/Button';
import '../OnlineOrder/OnlineOrder.css'
import delivery from '../../../assets/delivery/online-delivery.gif'

const OnlineOrder = () => {
    
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <div className="text-center lg:text-left w-2/4 order__content" data-aos="fade-up"
     data-aos-easing="center-bottom"
     data-aos-duration="2000">
            <h1 className="">NOW ACCEPTING
ONLINE ORDERS!</h1>
            <p className="py-6 w-10/12">No matter where you choose to indulge, the quality and
service remain the same. You won’t find an atmosphere
like ours elsewhere.</p>
<Button></Button>
          </div>
          <div className="w-2/4 rounded-xl">
          <div className='order__img' data-aos="fade-up"
     data-aos-easing="center-bottom"
     data-aos-duration="2000">
          <img className='w-full' src={delivery} alt='Delivery Image'/>
    </div>
          </div>
        </div>
      </div>
    );
};

export default OnlineOrder;