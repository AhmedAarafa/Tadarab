export const stickyCardHandler = () => {
 
    const projectsSection: any = document.getElementById("practical-projects-section");
    const reviewsSection: any = document.getElementById("reviews-section");
    const courseSubscribersSection: any = document.getElementById("course-subscribers-section");
    const navbar: any = document.getElementById("nav");
    // to get HTML font size related to the width of the window
    const rootFontSize = parseFloat(
        window
        .getComputedStyle(document.getElementsByTagName("html")[0])
        .getPropertyValue("font-size")
      );

      if(window.innerWidth >= 576){
        
        if (
        //   window.scrollY >= (projectsSection?.offsetTop ? projectsSection?.offsetTop : 999999999999999999999) || 
        // window.scrollY >= (reviewsSection?.offsetTop ? reviewsSection?.offsetTop : 999999999999999999999) || 
        window.scrollY >= courseSubscribersSection?.offsetTop
        ) {
          
            // hide un-wanted elements in the full width sticky view
            // and change the remained ones properties to fit to the new view
            const stickyCard: any = document.getElementById("sub-sticky-card");
            const stickyTopCourseCard: any = document.getElementById("sub-sticky-top-course-card");
            const notificationBar: any = document.getElementById("notification-bar");
            stickyCard ? stickyCard.style.cssText = `
                 display:none;`:null; 
            stickyTopCourseCard ? stickyTopCourseCard.style.cssText = `
                 display:flex;
                 position:fixed;
                 top:${navbar?.offsetHeight + notificationBar?.offsetHeight || 0}px;
                   `:null;
    
           
        }else if(window.scrollY < 
          // projectsSection?.offsetTop || 
          // window.scrollY < reviewsSection?.offsetTop || 
          // window.scrollY < 
          courseSubscribersSection?.offsetTop){

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

             if (
              // window.scrollY >= (projectsSection?.offsetTop ? projectsSection?.offsetTop : 999999999999999999999) || 
              // window.scrollY >= (reviewsSection?.offsetTop ? reviewsSection?.offsetTop : 999999999999999999999) || 
              window.scrollY >= courseSubscribersSection?.offsetTop
              ) {

                  const notificationBar: any = document.getElementById("notification-bar");
                  const stickyCard: any = document.getElementById("sub-sticky-card");
                  const stickyTopCourseCard: any = document.getElementById("sub-sticky-top-course-card");
                   stickyCard ? stickyCard.style.cssText = `display:none`:null;
                   stickyTopCourseCard ? stickyTopCourseCard.style.cssText = `
                   display:flex;
                   position:fixed;
                   top:${navbar?.offsetHeight + notificationBar?.offsetHeight || 0}px;
                   `:null;
              }else if(
                // window.scrollY < projectsSection?.offsetTop || 
                // window.scrollY < reviewsSection?.offsetTop || 
                window.scrollY < courseSubscribersSection?.offsetTop){

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
