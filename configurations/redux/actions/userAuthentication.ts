

import * as TYPES from '../actionTypes/userAuthentication';

export const setIsUserAuthenticated = (payload:{
    isUserAuthenticated:boolean,
    token:string | null
}) => ({
    type: TYPES.IS_USER_AUTHENTICATED,
    payload:payload,
}); 