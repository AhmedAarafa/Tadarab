

import * as TYPES from '../actionTypes/errorText';

export const setErrorText = (payload:string) => ({
    type: TYPES.ERROR_TEXT,
    payload:payload,
}); 