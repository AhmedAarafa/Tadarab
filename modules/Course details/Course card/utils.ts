export const stickyCardHandler = () => {
    let isExist = 0;
    // to get elements concerned to be changed in the full width sticky view
    const stickyCard: any = document.getElementById("sticky-card");
    const projectsSection: any = document.getElementById("practical-projects-section");
    const navbar: any = document.getElementById("nav");
    const title: any = document.getElementById("course-card__title");
    const guaranteeBox: any = document.getElementById("course-card__guarantee-card");
    const detailsList: any = document.getElementById("course-card__details-list");
    const promoCode: any = document.getElementById("course-card__promo-code");
    const actionBtns: any = document.getElementById("course-card__action-btns");
    const pricesBox:any =document.getElementById("course-card__prices-box");
    // to get HTML font size related to the width of the window
    const rootFontSize = parseFloat(
        window
        .getComputedStyle(document.getElementsByTagName("html")[0])
        .getPropertyValue("font-size")
      );

  window.addEventListener("scroll", function () {
   // check if the user scroll to the "practical projects" section (the section that the card turns to full width sticky at)
    if (window.scrollY >= projectsSection.offsetTop) {
        // hide un-wanted elements in the full width sticky view
        // and change the remained ones properties to fit to the new view
        title.style.cssText = `display:none`
        guaranteeBox.style.cssText = `display:none`
        detailsList.style.cssText = `display:none`
        promoCode.style.cssText = `display:none`
        actionBtns.style.cssText = `margin-top:0`
        stickyCard.style.cssText = `
             position:fixed ;
              top:${navbar.offsetHeight}px;
              margin:0;
              z-index:4;
              background-color:white;
              border-radius: 0;
              width: 100%;
              margin-right:-8.5rem;
              display: flex;
              align-items:center;
              justify-content:space-between;
              padding: 0.3rem 8.3rem;
             `;
             stickyCard.childNodes.forEach((element:any )=> {
                if(element.id == "sticky-card__course-details-box"){
                    isExist = isExist+1;
                }
             });
             // "isExist" to check if the appended is already created to avoid redundancy
             if(isExist == 0){
                // create an element to wrap course image, name and trainer name in it (not exist on the normal view of the card)
                 const CardDetailsBox:any = document.createElement("div");
                 CardDetailsBox.setAttribute("id", "sticky-card__course-details-box");
                 CardDetailsBox.innerHTML = 
                  `
                    <div id="sticky-card__course-details-box__img-box">
                         <img id="sticky-card__course-details-box__img-box__img" src="/images/course2cropped.png" alt="course image" />
                     </div>
                     <div id="sticky-card__course-details-box__details">
                         <div id="sticky-card__course-details-box__details__course-name">دورة تعليم الرسم والتلوين</div>
                         <div id="sticky-card__course-details-box__details__trainer-name">أ/ مروة عبدالله</div>
                     </div>
                     `   
                 stickyCard.prepend(CardDetailsBox);
                //  console.log(stickyCard.childNodes);
                const courseDetailsBox:any =document.getElementById("sticky-card__course-details-box");
                const courseName:any =document.getElementById("sticky-card__course-details-box__details__course-name");
                const trainerName:any =document.getElementById("sticky-card__course-details-box__details__trainer-name");
                const courseImg:any =document.getElementById("sticky-card__course-details-box__img-box__img");
                courseDetailsBox.style.cssText=`
                display: flex;
                align-items:center;
                justify-content:flex-start;
                `
                courseImg.style.cssText = `
                width:5rem;
                height:3.125rem;
                display:inline-flex;
                border-radius:0.5rem;
                box-shadow: 0 0 1.25rem #0000001A;
                margin-left:1rem;
                `
                courseName.style.cssText=`
                font-size:1.25rem;
                font-weight:800;
                color:#222;
                `
                trainerName.style.cssText=`
                font-size:0.875rem;
                color:#777;
                `
                pricesBox.style.cssText=`
                margin-right:15rem;
                `
             }else{
                 const courseDetailsBox:any =document.getElementById("sticky-card__course-details-box");
                 courseDetailsBox.style.cssText=`
                 display:flex;
                 `
                 pricesBox.style.cssText=`
                margin-right:15rem;
                `
             }
    }else if(window.scrollY < projectsSection.offsetTop){
        const cardDetailsBox:any =document.getElementById("sticky-card__course-details-box");
        stickyCard.style.cssText = `
        margin: 5.5rem 0.5rem 0 0;
        padding: 1.25rem 1.625rem 0 1.625rem;
        width: 22rem;
        box-shadow: 0 0 1.25rem #0000001A;
        border-radius: 1.25rem;
        position: sticky;
        top: 5.5rem;
        `
        cardDetailsBox ? cardDetailsBox.style.cssText= `display:none;` : null ;
        title.style.cssText = `display:block`
        guaranteeBox.style.cssText = `display:flex`
        detailsList.style.cssText = `display:block`
        promoCode.style.cssText = `display:block`
        actionBtns.style.cssText = `margin-top:0.7rem`
        pricesBox.style.cssText=`margin-right:0rem;`
    }
  });
};