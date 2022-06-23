

import * as TYPES from '../actionTypes/userAuthentication';

export const setIsUserAuthenticated = (payload:{
    isUserAuthenticated:boolean,
    token:string | null,
    id:number | null,
    isSubscribed:boolean | null,
}) => ({
    type: TYPES.IS_USER_AUTHENTICATED,
    payload:payload,
}); 