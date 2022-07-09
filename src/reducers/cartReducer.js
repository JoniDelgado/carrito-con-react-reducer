import { TYPES } from "../actions/cartAction"

export const cartInitialState = {
    products: [
        {id:1, name:'producto 1', price: 100},
        {id:2, name:'producto 2', price: 200},
        {id:3, name:'producto 3', price: 300},
        {id:4, name:'producto 4', price: 400},
        {id:5, name:'producto 5', price: 500},
        {id:6, name:'producto 6', price: 600},
    ],
    cart: [],
}

export const cartReducer =  (state, action) => {
    switch (action.type) {
        case TYPES.ADD_ONE_TO_CART: { 

            const newItem = state.products.find(prod => prod.id === action.productId);

            const itemInCart = state.cart.find(item => item.id === newItem.id)

            return !itemInCart
            ?
            {...state, cart:[...state.cart, {...newItem, quantity: 1}]}
            :
            {...state, cart: state.cart.map(prod => {
                return (prod.id === itemInCart.id) 
                ?
                {...prod, quantity: prod.quantity + 1}
                :
                prod;
            })}
        }    
        case TYPES.REMOVE_ONE_FROM_CART: {
            const itemId = action.productId;
            const itemToDel = state.cart.find(prod => prod.id === itemId)

            return itemToDel.quantity > 1 
            ? {...state, cart: state.cart.map(prod => {
                return prod.id === itemId
                ? {...prod, quantity: prod.quantity - 1}
                : prod;
            })} 
            : {...state, cart: state.cart.filter(prod => prod.id !== itemId)}
            
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            const prodId = action.productId;

            return {...state, cart: state.cart.filter(prod => prod.id !== prodId)}
        }
        case TYPES.CLEAR_CART: return {...cartInitialState}
        
        default: return state
    }
}