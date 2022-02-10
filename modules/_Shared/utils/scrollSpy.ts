import React , { useEffect , useState } from "react";

export const scrollspyHandler = (helperId:any) => {
  window.addEventListener("resize" , ()=>{

    const navbar:any =  document.getElementById("nav");
    const tabsResponsiveBar:any =  document.getElementById("tabs-responsive-bar");
    const scrollspyHelper:any =  document.getElementById(helperId);
    const rootFontSize = parseFloat(
     window
     .getComputedStyle(document.getElementsByTagName("html")[0])
     .getPropertyValue("font-size")
   );
   scrollspyHelper ? scrollspyHelper.style.cssText=`top:-${(navbar.offsetHeight * 2) + 2*rootFontSize}px`:null;
     
    });
    
    const navbar:any =  document.getElementById("nav");
    const tabsResponsiveBar:any =  document.getElementById("tabs-responsive-bar");
    const scrollspyHelper:any =  document.getElementById(helperId);
    const rootFontSize = parseFloat(
     window
     .getComputedStyle(document.getElementsByTagName("html")[0])
     .getPropertyValue("font-size")
   );
   scrollspyHelper ? scrollspyHelper.style.cssText=`top:-${(navbar.offsetHeight * 2) + 2*rootFontSize}px`:null;

 }
