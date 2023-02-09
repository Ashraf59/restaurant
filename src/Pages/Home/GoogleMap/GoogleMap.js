import React from 'react';
import { Link } from 'react-router-dom'
import '../GoogleMap/GoogleMap.css';

const GoogleMap = () => {
    return (
        <div className="hero min-h-screen mt-20">
        <div className="hero-content flex-col lg:flex-row justify-around">
          <div className="text-center lg:text-left w-1/3 map-design" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
     data-aos-duration="2000">
            <h1 className="">Visit Our Location!</h1>
            <p className="py-6">No matter where you choose to indulge, the quality and
service remain the same. You won’t find an atmosphere
like ours elsewhere.</p>
          </div>
          <div className="w-2/4 shadow shadow-slate-300 rounded-xl" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
     data-aos-duration="2000">
          <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14763.265767654755!2d91.8085253!3d22.3227808!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1675851097713!5m2!1sbn!2sbd"
           width="628" height="450" 
           style={{ border: "0", borderRadius: '15px'  }}
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
    </div>
          </div>
        </div>
      </div>
    );
};

export default GoogleMap;