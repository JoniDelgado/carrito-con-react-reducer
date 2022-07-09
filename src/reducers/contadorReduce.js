import { types } from "../actions/contadorAction";

export const contadorInitialState = { contador: 0 };

export const contadorReducer = (state, action) => {
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
      return contadorInitialState;

    default:
      return state;
  }
};