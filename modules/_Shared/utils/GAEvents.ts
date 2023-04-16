import TadarabGA from "modules/_Shared/utils/ga";

export const GAProductClickEventHandler = (course:any,order:number)=> {
    console.log("GAProductClickEventHandler fired");
    let pageName:string = ""
      if(location.pathname.includes("course")){
        pageName = 'single';
      }else if(location.pathname == "/"){
        pageName = 'homepage';
      }else{
        pageName = 'suggetion';
      }
    
     let tadarabGA = new TadarabGA();
     tadarabGA.tadarab_fire_traking_GA_code("product_click",{
       products: [{
         name: course.title,
         id: course.id,
         price: course.discounted_price_usd,
         brand: "Tadarab",
         category: "Recorded Course",
         variant: "Single Course",
         position: order+1
      }],
      list:pageName
     });
}


export const GAProductimpressionEventHandler = (courseId:any)=> {
  
    let sliderNavigationArrows:any = document.querySelectorAll(`[class^="swiper-button"]`);

    sliderNavigationArrows?.forEach((arrow:any) => {
      arrow.onclick = ()=>{
        setTimeout(() => {
          GAProductimpressionEventHandler(courseId);
        }, 300);
        
      }
    });

    let tadarabGA = new TadarabGA();
    let impressions:any[] = [];
    let uniqueImpressions:any[] = [];
  
      const trigger: any = document.querySelectorAll(
        `[id^=${courseId}]`
      );
  
      trigger.forEach((element:any,index:number,trigger:any) => {
        
        let rect = element.getBoundingClientRect();
        if(
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      ){
        let courseInfo:any = JSON.parse(element.getAttribute('data-coursedetails'));
        if(JSON.parse(element.getAttribute('data-isvisible')) == false){
          impressions.push(courseInfo);
          uniqueImpressions = [...new Set(impressions)];
          element.setAttribute("data-isvisible", true)
        }else{
        }
    }
    if(index === trigger.length -1){
      if(JSON.stringify(uniqueImpressions) == "[]"){
      }else{
        tadarabGA.tadarab_fire_traking_GA_code('product_impressions',uniqueImpressions);
      }
    }
  });


  
}