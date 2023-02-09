import React from 'react';
import { Link } from 'react-router-dom';
import '../../Shared/FooterTwo/FooterTwo.css'
import logo from '../../assets/logo/logo.gif'

const FooterTwo = () => {
    return (
        <footer className="new_footer_area bg_color">
        <div className="new_footer_top" data-aos="fade-up"
     data-aos-easing="center-bottom"
     data-aos-duration="2000">
        <div className='row' >
         <div className='col'>
            <div className='food-delivery'>
            <img src={logo} className='logo' alt='logo'/>
             <p className='blind-text'>Delivery Free</p>
            </div>
             <p>No matter where you choose to indulge, the quality and
             service remain the same. You won’t find an atmosphere
             like ours elsewhere.</p>
         </div>
         <div className='col'>
             <h3>Restaurant <div className='underline'><span></span></div> </h3>
             <p>Agrabad Road</p>
             <p>Chattogram, Bangladesh</p>
             <p className='email-id'>cephoint-restaurant@gmail.com</p>
             <h4>+880171111111</h4>
         </div>
         <div className='col'>
         <h3>Food Menu <div className='underline'><span></span></div></h3>
         <ul>
           <li><Link to='#'>Thai</Link></li>
            <li><Link to='#'>Chiness</Link></li>
            <li><Link to='#'>Mandarin</Link></li>
            <li><Link to='#'>Hydrabad</Link></li>
             <li><Link to='#'>India</Link></li>
            
         </ul>
         </div>
         <div className='col'>
         <h3>Newsletter <div className='underline'><span></span></div></h3>
         <form>
          <i className="ri-mail-fill"></i>
       <input type='email' placeholder='Enter your email'/>
          <button type='submit'><i className="ri-arrow-right-line"></i></button>

         </form>
         <div className='social-icon'>
          <i className="ri-facebook-circle-fill"></i>
          <i className="ri-linkedin-box-fill"></i>
         <i className="ri-twitter-fill"></i>
          <i className="ri-instagram-fill"></i>

         </div>
          </div>
         
          </div>  
         

            {/* Footer Start  */}
          <div className="footer_bg">
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div>
              
              <hr/>
          <p className='copyright'>Cephoint-Restaurant @ 2023 - All Rights Reserved</p>

              
              
            </div>
          </div>
        </div>
      </footer>
    );
};

export default FooterTwo;