export{}
// let showMore:any =true;

// export const showMoreHandler = (containerId:any,iconId:any,fadeoutComponentId:any)=>{
//     if (process.browser) {
//         const courseDetails:any = document.getElementById(containerId);
//         const showMoreIcon:any = document.getElementById(iconId);
//         const fadeOut:any = document.getElementById(fadeoutComponentId);
    
//         showMore = !showMore;
//         if(showMore == true){
//             showMoreIcon ? showMoreIcon.style.transform ="rotate(180deg)": null;
//             showMoreIcon ? showMoreIcon.style.transition = " all 0.4s ease" : null;
//             fadeOut ? fadeOut.style.display ="none": null;
//             courseDetails ? courseDetails.style.height = "fit-content": null ;
//             courseDetails ? courseDetails.style.overflow = "visible": null ;
//         } else{
//             showMoreIcon ? showMoreIcon.style.transform ="none": null;
//             showMoreIcon ? showMoreIcon.style.transition = " all 0.4s ease" : null;
//             fadeOut ? fadeOut.style.display ="block": null;
//             courseDetails ? courseDetails.style.height = "14rem": null ;
//             courseDetails ? courseDetails.style.overflow = "hidden": null ;
//         }
//     }

//     return showMore;
// }