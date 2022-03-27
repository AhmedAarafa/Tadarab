export const popoverHandler = (status:string) => {
  // document.addEventListener("mousemove", (e) => {
  //   // to capture trigger and overlay popover elements
  //   const trigger: HTMLElement | null = document.getElementById("discover");
  //   const popover: HTMLElement | null = document.getElementById("discover-popover");
  //   // to get thier boundaries
  //   const triggerBoundaries: any = trigger?.getClientRects()[0];
  //   const popoverBoundaries: any = popover?.getClientRects()[0];
  //   const dropdownIcon: any = document.getElementById("dropdown");
  //   // to detect root font size (HTMl font-size)
  //   const rootFontSize = parseFloat(
  //     window
  //     .getComputedStyle(document.getElementsByTagName("html")[0])
  //     .getPropertyValue("font-size")
  //   );
  //   // to determine that the mouse pointer in the range of the trigger or the overlay popover to control it's visibility
  //   // if (
  //   //   (e.clientX >= triggerBoundaries?.left &&
  //   //     e.clientX <= triggerBoundaries?.right &&
  //   //     e.clientY >= triggerBoundaries?.top &&
  //   //     e.clientY <= 4.8 * rootFontSize) ||
  //   //   (e.clientY >= popoverBoundaries?.top &&
  //   //     e.clientY <= popoverBoundaries?.bottom &&
  //   //     e.clientX >= popoverBoundaries?.left &&
  //   //     e.clientX <= popoverBoundaries?.right)
  //   // ) {
  //   //   // popover ? popover.style.display = "flex" : null;
  //   //   dropdownIcon ? dropdownIcon.style.cssText=`
  //   //   transform:rotate(180deg);
  //   //   transition:all 0.3s linear;
  //   //   `: null ;
  //   // } else {
  //   //   // popover ? popover.style.display = "none" : null;
  //   //   dropdownIcon ? dropdownIcon.style.cssText=`
  //   //   transform:none;
  //   //   transition:all 0.3s linear;
  //   //   `: null ;
  //   // }
  // });

  const dropDownIcon:any = document.querySelector("#discover > svg");

  switch (status) {
    case "over":
      dropDownIcon.style.cssText=`
      transform: rotate(180deg);
      transition: all 0.3s linear;
      `
      
      break;
      case "out":
      dropDownIcon.style.cssText=`
      transform: none;
      transition: all 0.3s linear;
      `
      break;
  
    default:
      break;
  }
};

// export const closeBtnHandler = ()=>{
  
//   window.addEventListener("click" , (e:any)=>{
//     if(e.target.className == "btn-close" ||
//      e.target.className == "fade offcanvas-backdrop" 
//      ){
//       const closeBtn:any=document.getElementsByClassName(`btn-close`)[0];
//       closeBtn.style.cssText=` display:none !important`;
//       const discoverSidebar:any = document.getElementById("offcanvasNavbar2");
//       discoverSidebar ?
//         discoverSidebar.style.cssText=`
//       transform: translateX(100%);
//       visibility:hidden;
//       transition: all 0.3s ease-in-out;
//       `
//        : 
//       null ;
//       return false;
//     }

//     if(e.target.id == "back-btn" ||
//      e.target.id == "back" ||
//      e.target.id == "back-btn-text" ||
//      e.target.id == "Path_12841"
//      ){
//       const discoverSidebar:any = document.getElementById("offcanvasNavbar2");
//       discoverSidebar.style.cssText=`
//       transform: translateX(100%);
//       visibility:hidden;
//       transition: all 0.3s ease-in-out;
//       `
//       return false;
//     }

//     if(e.target.id == "discover" ||
//      e.target.id == "next" ||
//      e.target.id == "Path_12841" 
//      ){
//       const discoverSidebar:any = document.getElementById("offcanvasNavbar2");
//       discoverSidebar ?  discoverSidebar.style.cssText=`
//       transform: none;
//       visibility:visible;
//       ` : null ;
//       return true;
//     }
//   });
// }
