
import * as TYPES from '../actionTypes/checkoutType';

export const setCheckoutType = (payload:string) => ({
    type: TYPES.CHECKOUT_TYPE,
    payload:payload,
}); 