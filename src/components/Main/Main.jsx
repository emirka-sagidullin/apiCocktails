import React from 'react';
import Card from '../Card/Card';
import Cocktails from '../Cocktails/Cocktails';

const Main = ({ ver, gettingCocktail, strDrink, strDrinkThumb, idDrink, addToCart }) => {
  const result = () => {
    return <div></div>;
  };

  return (
    <div>
      {ver ? (
        <div>
          <Card
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}
            idDrink={idDrink}
            addToCart={addToCart}
          />
          <Card
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}
            idDrink={idDrink}
            addToCart={addToCart}
          />
          <Card
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}
            idDrink={idDrink}
            addToCart={addToCart}
          />
          <Card
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}
            idDrink={idDrink}
            addToCart={addToCart}
          />
          <Card
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}
            idDrink={idDrink}
            addToCart={addToCart}
          />
        </div>
      ) : (
        <Cocktails gettingCocktail={gettingCocktail} />
      )}
    </div>
  );
};

export default Main;
