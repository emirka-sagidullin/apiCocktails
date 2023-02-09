import React from 'react';

const Cart = ({ cart, drink, id, img, delProd, ordProd }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <p>{drink}</p>
          <img src={img} alt="" />
          <p>{id}</p>
          <p>Количество: {cart.length}</p>
          <button onClick={ordProd}>Заказать</button>
          <button onClick={delProd}>Удалить</button>
        </div>
      ) : (
        <div>Корзина пуста</div>
      )}
    </div>
  );
};

export default Cart;
