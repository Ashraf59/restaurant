import React, { useEffect, useState } from 'react';
import FoodCard from '../../../Pages/Home/FoodMenu/FoodCard';
import '../FoodMenu/FoodMenu.css'

const FoodMenu = () => {
    const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenus(data))
    },[])
    return (
        <div >
            <h1 className='text-design'>Our Classic <br/> Delicious Food</h1>
            <p className='text2-design'>Sink your teeth into one of our classic Delicious items to
taste a burger like never before. You’ll forget all about your
“favorite menus” once you’ve tried an Angus Food</p>
           <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-14 lg:gap-8 lg:mx-20'>
           {
                menus.map(menu => 
                    <FoodCard
                    key = {menu.id}
                    menu = {menu}
                    
                    ></FoodCard>
                    
                    )
            }
           </div>
            
        </div>
    );
};

export default FoodMenu;