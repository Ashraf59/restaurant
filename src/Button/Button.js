import React from 'react';
import '../Button/Button.css'

const Button = () => {
    return (
        <div>
           <button className="c-button c-button--gooey"> View Menu
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
<svg style={{display: "block", height: 0, width: 0}} version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="goo">
      <feGaussianBlur result="blur" stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
      <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic"></feBlend>
    </filter>
  </defs>
</svg> 
        </div>
    );
};

export default Button;