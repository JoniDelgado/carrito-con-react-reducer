import React, { useReducer } from 'react';
import { types } from '../actions/contadorAction';
import {
  contadorReducer,
  contadorInitialState,
} from '../reducers/contadorReduce';

const CounterMejorado = () => {
  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState);

  const sumar = () => dispatch({ type: types.incrementar });
  const sumar5 = () => dispatch({ type: types.incrementar5 });
  const restar = () => dispatch({ type: types.decrementar });
  const restar5 = () => dispatch({ type: types.decrementar5 });
  const reset = () => dispatch({ type: types.reset });

  return (
    <>
      <header>
        <nav>
          <button onClick={sumar5}>Sumar 5</button>
          <button onClick={sumar}>Sumar</button>
          <button onClick={reset}>Resetear</button>
          <button onClick={restar}>Restar</button>
          <button onClick={restar5}>Restar 5</button>
        </nav>
      </header>
      <h3>{state.contador}</h3>
    </>
  );
};

export default CounterMejorado;
