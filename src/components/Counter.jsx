import React, { useReducer } from 'react';

const initialState = { contador: 0 };

const types = {
  incrementar: 'incrementar',
  incrementar5: 'incrementar5',
  decrementar: 'decrementar',
  decrementar5: 'decrementar5',
  reset: 'reset',
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.incrementar:
      return { contador: state.contador + 1 };
    case types.incrementar5:
      return { contador: state.contador + 5 };
    case types.decrementar:
      return { contador: state.contador - 1 };
    case types.decrementar5:
      return { contador: state.contador - 5 };
    case types.reset:
      return initialState;

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

export default Counter;
