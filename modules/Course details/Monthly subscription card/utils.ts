export const stickyCardHandler = () => {
    // let isExist = 0;
    // to get elements concerned to be changed in the full width sticky view
    // const stickyCard: any = document.getElementById("sub-sticky-card");
    const projectsSection: any = document.getElementById("practical-projects-section");
    const navbar: any = document.getElementById("nav");
    // const title: any = document.getElementById("course-card__title");
    // const guaranteeBox: any = document.getElementById("course-card__guarantee-card");
    // const detailsList: any = document.getElementById("course-card__details-list");
    // const promoCode: any = document.getElementById("course-card__promo-code");
    // const actionBtns: any = document.getElementById("course-card__action-btns");
    // const pricesBox:any =document.getElementById("course-card__prices-box");
    // to get HTML font size related to the width of the window
    const rootFontSize = parseFloat(
        window
        .getComputedStyle(document.getElementsByTagName("html")[0])
        .getPropertyValue("font-size")
      );

      if(window.innerWidth >= 576){

        if (window.scrollY >= projectsSection?.offsetTop) {
            // hide un-wanted elements in the full width sticky view
            // and change the remained ones properties to fit to the new view
            const stickyCard: any = document.getElementById("sub-sticky-card");
            const stickyTopCourseCard: any = document.getElementById("sub-sticky-top-course-card");
            stickyCard ? stickyCard.style.cssText = `
                 display:none;`:null;
            stickyTopCourseCard ? stickyTopCourseCard.style.cssText = `
                 display:flex;
                 position:fixed;
                 top:${navbar.offsetHeight}px;
                 `:null;
    
           
        }else if(window.scrollY < projectsSection?.offsetTop){
            // const cardDetailsBox:any =document.getElementById("sticky-card__course-details-box");
            const stickyCard: any = document.getElementById("sub-sticky-card");
            const stickyTopCourseCard: any = document.getElementById("sub-sticky-top-course-card");
            stickyCard ? stickyCard.style.cssText = `
            position: sticky;
            `:null;
            stickyTopCourseCard ? stickyTopCourseCard.style.cssText = `
            display: none;
            `:null;
        }
          window.addEventListener("scroll", function () {
           // check if the user scroll to the "practical projects" section (the section that the card turns to full width sticky at)
           if(window.innerWidth >= 576){
             if (window.scrollY >= projectsSection?.offsetTop) {
                  const stickyCard: any = document.getElementById("sub-sticky-card");
                  const stickyTopCourseCard: any = document.getElementById("sub-sticky-top-course-card");
                   stickyCard ? stickyCard.style.cssText = `display:none`:null;
                   stickyTopCourseCard ? stickyTopCourseCard.style.cssText = `
                   display:flex;
                   position:fixed;
                   top:${navbar.offsetHeight}px;
                   `:null;
              }else if(window.scrollY < projectsSection?.offsetTop){
                // const cardDetailsBox:any =document.getElementById("sticky-card__course-details-box");
                const stickyCard: any = document.getElementById("sub-sticky-card");
                const stickyTopCourseCard: any = document.getElementById("sub-sticky-top-course-card");
                stickyCard ? stickyCard.style.cssText = `
                position: sticky;
                `:null;
                stickyTopCourseCard ? stickyTopCourseCard.style.cssText = `
                display: none;
                `:null;
              }
           }else{
           }
          });
      }
      else if(window.innerWidth < 576)  {
        
        window.removeEventListener("scroll" , function(){
          return;
        });
        // const cardDetailsBox:any =document.getElementById("sticky-card__course-details-box");
        const stickyCard: any = document.getElementById("sub-sticky-card");
        const stickyTopCourseCard: any = document.getElementById("sub-sticky-top-course-card");
        stickyCard ? stickyCard.style.cssText = `
        margin: 3.281rem 0 0 0;
        padding: 1.25rem*2.5 1.625rem*2.5 0 1.625rem*2.5;
        width: 100%;
        box-shadow: 0 0 1.25rem*2.5 #0000001A;
        border-radius: 1.25rem*2.5;
        position: static ;
        `:null;
        stickyTopCourseCard ? stickyTopCourseCard.style.cssText=`display:none;` : null;
      }
     
};
