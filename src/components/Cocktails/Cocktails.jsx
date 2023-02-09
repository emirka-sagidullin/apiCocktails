import React from 'react';

const Cocktails = ({ gettingCocktail }) => {
    
  return (
    <form onSubmit={gettingCocktail}>
      <button type="submit">Получить коктейли</button>
    </form>
  );
};

export default Cocktails;
