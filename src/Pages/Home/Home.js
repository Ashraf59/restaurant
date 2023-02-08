import React from 'react';
import Banner from './Banner/Banner';
import FoodMenu from '../../Pages/Home/FoodMenu/FoodMenu';
import Offer from './Offer/Offer';

import FooterTwo from '../../Shared/FooterTwo/FooterTwo';
import Slider1 from './Slider/Slider1';
import GoogleMap from './GoogleMap/GoogleMap';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
         <Offer></Offer>
           <FoodMenu></FoodMenu>
           <Slider1></Slider1>
           <GoogleMap></GoogleMap>
           <FooterTwo></FooterTwo>
           {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;