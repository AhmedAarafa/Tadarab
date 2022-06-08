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
        case TYPES.ADD_COURSE_TO_CART:
            return {
                ...state,
                data: state?.data?.length ? [ ...state?.data, action.payload] : [action.payload]
            };
        case TYPES.REMOVE_COURSE_FROM_CART:
            const courseIndex = state?.data?.findIndex((course:any) => course.id === action.payload);
            if(courseIndex > -1) {
                state?.data?.splice(courseIndex, 1);
                return {
                ...state,
                data: [ ...state?.data]
                };

            } else {
                return {
                    ...state,
                };
            }
        default:
            return state;
    }
};
