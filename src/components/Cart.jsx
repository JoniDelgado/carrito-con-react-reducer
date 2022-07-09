import React from 'react';

const Cart = ({ data, handleDelOne, handleDelAll }) => {
  return (
    <div className='cart-nav'>
      <div className='cart-product'>
        <p>{data.name}</p>
        <p>
          ${`${data.price} x ${data.quantity} = $${data.price * data.quantity}`}
        </p>
        <button className='cart-btn' onClick={() => handleDelOne(data.id)}>
          Eliminar un elemento
        </button>
        <button className='cart-btn' onClick={() => handleDelAll(data.id)}>
          Eliminar todos
        </button>
      </div>
    </div>
  );
};

export default Cart;
