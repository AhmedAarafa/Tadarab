import { axiosInstance } from "configurations/axios/axiosConfig";
import { getData } from "./getData"
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";

export function handleCart(course:any,endPoint:string,isAuthenticated:boolean){

if(isAuthenticated == true){

    if(course.is_in_cart == false){

        return (axiosInstance
        .post(`users/cart/?country_code=${localStorage.getItem("countryCode")}`, {"item_ids" : JSON.stringify([course.id]).replace(/[\[\]']+/g,'')})
        .then((response:any) => {
         const totalItems:any = [];
         console.log("response.data.data",response.data.data);
         const cartResponse:any = response.data.data;
         
          response.data.data?.forEach((item:any)=>{
            totalItems.push(item.id);
            console.log(totalItems);
            
          });
          localStorage.setItem("cart" , JSON.stringify(totalItems));

          let tadarabFbPixel = new TadarabFBPixel();
      response.data.fb_tracking_events.forEach((ev:any)=>{

        tadarabFbPixel.setEventId(ev.event_id);
        tadarabFbPixel.eventHandler(ev.event_name, null);
      })

          const resp:any =  getData(endPoint).then(function(response) {
            return response ;
          })

          return ({resp,cartResponse})
        })
        .catch((error:any)=>{
          console.log("error", error);
        }))
      }else{
        return (axiosInstance
        .delete(`users/cart/?country_code=${localStorage.getItem("countryCode")}`, { data:{"item_id" : course.id}})
        .then((response:any) => {
         const totalItems:any = [];
          console.log("Response",response);
         const cartResponse:any = response.data.data;

          response?.data?.data?.forEach((item:any)=>{
          totalItems.push(item.id);
          });
          localStorage.setItem("cart" , JSON.stringify(totalItems));

          const resp:any =  getData(endPoint).then(function(response) {
            return response ;
          })
          console.log("resp",resp);
          

          return ({resp,cartResponse})

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
        
        return (axiosInstance
          .get(`courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${JSON.stringify(uniqeStoredCartCourses)?.replace(/[\[\]']+/g,'')}`)
          .then(function (response:any) {
            console.log(response.data.data);
            return response;
        })
      .catch(function (error) {
        console.log(error); 
      }));

      })())
      }else{
        course.is_in_cart = false;
        return((async function(){

            const localStorageItems:any = await localStorage.getItem("cart");
           const resultedItems:any = JSON.parse(localStorageItems).filter(function(ele:any){ 
              return ele != course.id; 
          });
          localStorage.setItem("cart" , JSON.stringify(resultedItems));
          return (axiosInstance
          .get(`courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${JSON.stringify(resultedItems)?.replace(/[\[\]']+/g,'')}`)
          .then(function (response:any) {
            console.log(response.data.data);
            return response;
        })
        .catch(function (error) {
          console.log(error); 
        }));
        })())
    //   dispatch(setCartItems(resultedItems));

    //   setLatestCourses([...latestCourses]);

      }
}

}