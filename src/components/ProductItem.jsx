import React from 'react';

const ProductItem = ({ data, addToCart }) => {
  return (
    <div className='card'>
      <h1>{data.name}</h1>
      <h3>${data.price}.00</h3>
      <button onClick={() => addToCart(data.id)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductItem;
