import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAddToCart = (course:any)=>{

  const userStatus = useSelector((state:any) => state.userAuthetication);
  const [cartItems, setCartItems] = useState<any>([]);

  if(userStatus.isUserAuthenticated == true){
      
}else{
  (async function (){ 
  await  setCartItems([...cartItems,course.id]);
  let storedCartCourses:any = await localStorage.getItem("cart");
  localStorage.setItem("cart" , JSON.stringify([...(JSON.parse(storedCartCourses) || []) ,course.id]));
    console.log("storedCartCourses",localStorage.getItem("cart"));
})();
}


}


export default useAddToCart;