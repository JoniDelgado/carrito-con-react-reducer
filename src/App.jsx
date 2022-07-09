import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterMejorado from './components/CounterMejorado';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className='App'>
      <ShoppingCart />
      <br />
      <hr />
      <h1>Utilizando useReducer</h1>
      <Counter />
      <br />
      <hr />
      <br />
      <h1>Utilizando useReducer con carpetas acomodadas</h1>
      <CounterMejorado />
    </div>
  );
}

export default App;
