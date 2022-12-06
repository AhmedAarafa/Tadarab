import * as TYPES from '../actionTypes/paymentStep';

export const setPaymentStep = (payload:any) => ({
    type: TYPES.PAYMENT_STEP,
    payload:payload, 
}); 