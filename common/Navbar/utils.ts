export const popoverHandler = (status:string) => {
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

export const notificationBarHandler = () => {
  let notifBar:any = document.getElementById('notification-bar');
  let navbar:any =  document.getElementById("nav");

  if(notifBar){
    navbar.style.cssText=`top:${notifBar?.offsetHeight}px ;`;
  }


};
