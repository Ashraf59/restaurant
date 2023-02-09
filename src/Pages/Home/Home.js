import React from 'react';
import Banner from './Banner/Banner';
import FoodMenu from '../../Pages/Home/FoodMenu/FoodMenu';
import Offer from './Offer/Offer';

import FooterTwo from '../../Shared/FooterTwo/FooterTwo';
import Slider1 from './Slider/Slider1';
import GoogleMap from './GoogleMap/GoogleMap';
import OnlineOrder from './OnlineOrder/OnlineOrder';
import FollowUs from './FollowUs/FollowUs';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
         <Offer></Offer>
           <FoodMenu></FoodMenu>
           <Slider1></Slider1>
           <GoogleMap></GoogleMap>
           <Testimonial></Testimonial>
           <OnlineOrder></OnlineOrder>
           <FollowUs></FollowUs>
           <FooterTwo></FooterTwo>
          
        </div>
    );
};

export default Home;