import React from 'react';

const Card = ({ subscription, price, handleSubscription }) => {
  return (
    <div className='card'>
      <h6 className='type'>{subscription}</h6>
      <div className='price'>
        <span>$</span>
        {price}
      </div>
      <h5 className='plan'>plan</h5>
      <ul className='details'>
        <li>FREE Stickers</li>
        <li>FREE Delivery</li>
        <li>24/7 support</li>
      </ul>
      <div
        className='buy-button'
        onClick={() => handleSubscription( subscription )}
      >
        <h3 className='btn'>subscribe</h3>
      </div>
    </div>
  );
};

export default Card;
