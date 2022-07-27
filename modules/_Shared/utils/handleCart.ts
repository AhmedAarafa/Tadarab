import { axiosInstance } from "configurations/axios/axiosConfig";
import { getData } from "./getData"
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import TadarabGA from "modules/_Shared/utils/ga";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import { tokenValidationCheck } from "modules/_Shared/utils/tokenValidationCheck";

export function handleCart(courses:any,endPoint:string,isSpecial:boolean){
  let tadarabGA = new TadarabGA();
  var GAProductsArray:any = [];
  let localStorageItemsArray:any = [];
  let localStorageItemsIdsArray:any = [];
  let val:any;

  const GAHandler = (action:any,GaProductsArray:any,GaProductsItemsArray:any)=>{

    if(action == "add"){

      let pageName:string = ""
      if(location.pathname.includes("course")){
        pageName = 'single';
      }else if(location.pathname == "/"){
        pageName = 'homepage';
      }else{
        pageName = 'suggetion';
      }
  
      tadarabGA.tadarab_fire_traking_GA_code("addtocart",
      {page_name:pageName,course_id:GaProductsItemsArray.flat(),products:GaProductsArray});
      GAProductsArray = [];
    }else{
      
      tadarabGA.tadarab_fire_traking_GA_code('remove_from_cart', GaProductsArray );
      GAProductsArray = [];

    }
  }

  

// if(isAuthenticated == true){
  courses.forEach((course:any,index:number) => {
    
    // console.log("course.archive_id",course);
    
    localStorageItemsArray.push({
      id: course.archive_id || course.id,
      is_special: isSpecial,
      coupon_code: localStorage.getItem("coupon_code") || ""
    });

    // for cart stuff (dropdown + cart icon counter)
    localStorageItemsIdsArray.push(course.id);

    GAProductsArray.push({name:course.title,
        id:course.id,
        price: course.discounted_price_usd,
        brand: 'Tadarab',
        category: course.categories[0] !== undefined && course.categories[0].title,
        variant:'Single Course',
        coupon:''});

         val = ((function(){

          if(index == courses.length -1){
      
            if(JSON.stringify(localStorageItemsArray) == "[]"){
            }else{
              const LSItems:any = localStorage.getItem("cart_items");
              const LSItemsIds:any = localStorage.getItem("cart");
              
              LSItems && JSON.stringify(LSItems) !== "[]" ? 
              localStorageItemsArray.push(JSON.parse(LSItems)) 
              : null;
              
              LSItemsIds && JSON.stringify(LSItemsIds) !== "[]" ? 
              localStorageItemsIdsArray.push(JSON.parse(LSItemsIds)) 
              : null;
              // console.log("LSItems",LSItems);

              // localStorage.setItem("cart_items",JSON.stringify(localStorageItemsArray));

              if(course.is_in_cart == false){ 
                  return (axiosInstance
                  .post(`users/cart/?country_code=null`,
                   {"items" : JSON.stringify([...new Set(localStorageItemsArray.flat())])})
                  .then((response:any) => {
                    if(tokenValidationCheck(response)){
                      const totalItems:any = [];
                      const cartResponse:any = response.data.data.courses;
                      
                       response.data.data?.courses?.forEach((item:any)=>{
                         totalItems.push(item.id);
                       });
                       localStorage.setItem("cart" , JSON.stringify(totalItems));
                       localStorage.setItem("cart_items" , JSON.stringify(response.data.data.cart_items));
               
                       /** Tracking */
                       GAHandler('add',GAProductsArray,localStorageItemsIdsArray);
                       FBPixelEventsHandler(response.data.fb_tracking_events,null);
               
                       const resp:any =  getData(endPoint).then(function(response) {
                         return response ;
                       });                       
                       return ({resp,cartResponse});
                    };
                  })
                  .catch((error:any)=>{
                    //console.log("error", error);
                  }))
                }else{
                  return (axiosInstance
                  .delete(`users/cart/?country_code=null`, { data:{"item_id" : course.id}})
                  .then((response:any) => {
                    if(tokenValidationCheck(response)){
                      
                      const totalItems:any = [];
                      //console.log("Response",response);
                      const cartResponse:any = response.data.data.courses;
               
                       response?.data?.data?.courses?.forEach((item:any)=>{
                       totalItems.push(item.id);
                       });
                       localStorage.setItem("cart" , JSON.stringify(totalItems));
                       localStorage.setItem("cart_items" , JSON.stringify(response.data.data.cart_items));
                       GAHandler("remove",GAProductsArray,localStorageItemsIdsArray);
                       const resp:any =  getData(endPoint).then(function(response) {
                         return response ;
                       })
                       
                       return ({resp,cartResponse})
                    };
            
                  })
                  .catch((error:any)=>{
                    console.log("error", error);
                  }))
                }
            }
          }
          
        })())
  });
  return val ;
}