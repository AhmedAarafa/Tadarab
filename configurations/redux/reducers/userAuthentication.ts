/* eslint-disable import/no-anonymous-default-export */
import { boolean } from "yup/lib/locale";
import * as TYPES from "../actionTypes/userAuthentication";

const userAuthentication = (
  state = {
    isUserAuthenticated: false,
    token: null,
    id: 0,
    isSubscribed: false,
  },
  action: {
    type: string;
    payload: {
      isUserAuthenticated: boolean;
      token: string | null;
      id: number | null;
      isSubscribed: boolean | null;
    };
  }
) => {
  switch (action.type) {
    case TYPES.IS_USER_AUTHENTICATED:
      return {
        ...state,
        isUserAuthenticated: action.payload.isUserAuthenticated,
        token: action.payload.token,
        id: action.payload.id,
        isSubscribed: action.payload.isSubscribed,
      };
    default:
      return state;
  }
};

export default userAuthentication;
