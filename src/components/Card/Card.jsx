import React from 'react';

const Card = ({ strDrink, strDrinkThumb, idDrink, addToCart, ver }) => {
  return (
    <div>
      <p>{strDrink}</p>
      <img src={strDrinkThumb} alt="" />
      <p>{idDrink}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Card;
