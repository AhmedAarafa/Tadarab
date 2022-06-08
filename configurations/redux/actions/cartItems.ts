import * as TYPES from '../actionTypes/cartItems';

export const setCartItems = (payload:any)=>({
        type: TYPES.CART_ITEMS,
        payload:payload,
}); 

export const addCourseToCart = (payload:any)=>({
        type: TYPES.ADD_COURSE_TO_CART,
        payload:payload,
}); 

export const removeCourseFromCart = (courseId:number)=>({
        type: TYPES.REMOVE_COURSE_FROM_CART,
        payload:courseId,
}); 