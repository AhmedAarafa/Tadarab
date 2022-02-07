import * as TYPES from '../actionTypes/cartItems';

export const setCartItems = (payload:any) => async () =>({
        type: TYPES.CART_ITEMS,
        payload:payload,
}); 
