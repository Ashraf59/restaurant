import React from 'react';
import CardButton from './CardButton/CardButton';

const FoodCard = ({menu}) => {
  const{img, title, description} = menu;
    return (
        <div>
            <div className="card w-[370px] h-[30rem] bg-base-100 shadow shadow-slate-300 m-auto">
  <figure>
    <img src= {img} alt="Shoes" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {description.length > 80 ? 
    <p className='text-left'>{description.slice(0, 80) + '...'}</p>
    :
    <p className='text-left'>{description}</p>
  }
    <div>
      <CardButton/>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;