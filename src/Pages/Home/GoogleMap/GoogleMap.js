import React from 'react';
import { Link } from 'react-router-dom';

const GoogleMap = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-around">
          <div className="text-center lg:text-left w-1/3">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="w-2/4 shadow shadow-slate-500 rounded-xl">
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14763.265767654755!2d91.8085253!3d22.3227808!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1675851097713!5m2!1sbn!2sbd"
           width="620" height="450" 
           style={{ border: "0" }}
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