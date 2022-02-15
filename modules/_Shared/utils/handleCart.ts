import { axiosInstance } from "configurations/axios/axiosConfig";
import { getData } from "./getData"

export function handleCart(course:any,endPoint:string,isAuthenticated:boolean){

if(isAuthenticated == true){

    if(course.is_in_cart == false){

        return (axiosInstance
        .post(`users/cart/?country_code=eg`, {"item_ids" : JSON.stringify([course.id])})
        .then((response:any) => {
         const totalItems:any = [];
          response.data.data.forEach((item:any)=>{
            totalItems.push(item.id);
          });
          localStorage.setItem("cart" , JSON.stringify(totalItems));

          const resp:any =  getData(endPoint).then(function(response) {
            return response ;
          })

          return ({resp,totalItems})
        })
        .catch((error:any)=>{
          console.log("error", error);
        }))
      }else{
        return (axiosInstance
        .delete(`users/cart/?country_code=eg`, { data:{"item_id" : course.id}})
        .then((response:any) => {
         const totalItems:any = [];
          console.log("Response",response);
          response.data.data.forEach((item:any)=>{
          totalItems.push(item.id);
          });
          localStorage.setItem("cart" , JSON.stringify(totalItems));

          const resp:any =  getData(endPoint).then(function(response) {
            return response ;
          })

          return ({resp,totalItems})

        })
        .catch((error:any)=>{
          console.log("error", error);
        }))
      }
}else{
    if(course.is_in_cart == false){
        course.is_in_cart = true;
        return ((async function (){ 
        // await  setCartItems([...new Set(cartItems),course.id]);
        const storedCartCourses:any = await localStorage.getItem("cart");
        
        const uniqeStoredCartCourses = [...new Set([...(JSON.parse(storedCartCourses) || []),course.id])];
        localStorage.setItem("cart" , JSON.stringify((uniqeStoredCartCourses || [])));
        //   dispatch(setCartItems(uniqeStoredCartCourses));
        //   setLatestCourses([...latestCourses]);
        return uniqeStoredCartCourses;
      })())
      }else{
        course.is_in_cart = false;
        return((async function(){

            const localStorageItems:any = await localStorage.getItem("cart");
           const resultedItems:any = JSON.parse(localStorageItems).filter(function(ele:any){ 
              return ele != course.id; 
          });
          localStorage.setItem("cart" , JSON.stringify(resultedItems));
          return resultedItems ;
        })())
    //   dispatch(setCartItems(resultedItems));

    //   setLatestCourses([...latestCourses]);

      }
}

}