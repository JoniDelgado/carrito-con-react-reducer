import React, { useReducer } from 'react';
import { cartReducer, cartInitialState } from '../reducers/cartReducer';
import { TYPES } from '../actions/cartAction';
import ProductItem from './ProductItem';
import Cart from './Cart';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const { products, cart } = state;

  const addToCart = (id) =>
    dispatch({ type: TYPES.ADD_ONE_TO_CART, productId: id });

  const handleDelOne = (id) =>
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, productId: id });

  const handleDelAll = (id) =>
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, productId: id });

  const handleClearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <h1>Carrito de compras</h1>
      <h3>con useReducer</h3>
      <div className='cart-nav'>
        {cart &&
          cart.map((product) => {
            return (
              <Cart
                key={product.id}
                data={product}
                handleDelOne={handleDelOne}
                handleDelAll={handleDelAll}
              />
            );
          })}
        <button className='clear-cart-btn' onClick={handleClearCart}>
          Vaciar Carrito
        </button>
      </div>
      <section className='product-wrapper'>
        <h2>Lista de productos</h2>
        <div className='products-card'>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
