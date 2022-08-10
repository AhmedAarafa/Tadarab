/* eslint-disable import/no-anonymous-default-export */
import * as TYPES from "../actionTypes/cartItems";

export default (state:any = [],
    action:any
) => {
    switch (action.type) { 
        case TYPES.CART_ITEMS:
            return {
                ...state,
               data:action.payload,
            };
        default:
            return state;
    }
};
