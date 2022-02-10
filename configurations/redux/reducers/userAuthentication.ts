/* eslint-disable import/no-anonymous-default-export */
import { boolean } from "yup/lib/locale";
import * as TYPES from "../actionTypes/userAuthentication";

const userAuthentication = (
  state = {
    isUserAuthenticated: false,
    token: null,
  },
  action: {
    type: string;
    payload: {
      isUserAuthenticated: boolean;
      token: string | null;
    };
  }
) => {
  switch (action.type) {
    case TYPES.IS_USER_AUTHENTICATED: 
      return {
        ...state,
        isUserAuthenticated: action.payload.isUserAuthenticated,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default userAuthentication;
