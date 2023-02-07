import React from 'react';
import Banner from './Banner/Banner';
import FoodMenu from '../../Pages/Home/FoodMenu/FoodMenu';
import Offer from './Offer/Offer';

import FooterTwo from '../../Shared/FooterTwo/FooterTwo';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
         <Offer></Offer>
           <FoodMenu></FoodMenu>
           <FooterTwo></FooterTwo>
           {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;