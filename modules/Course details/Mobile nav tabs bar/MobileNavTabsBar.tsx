import React, { useState, useEffect } from "react";
import styles from "./mobile-nav-tabs-bar.module.css";

export default function MobileCheckoutBar() {
  const [sectionSelection, setSectionSelection] = useState("");
  const [reviewsSectionExist, setReviewsSectionExist] = useState(true);

  useEffect(() => {

    const whatYouWillLearnSection: any = document.querySelector("[id='what-you-will-learn']");
    const courseContentSection: any = document.querySelector("[id='course-content']");
    const trainerInfoSection: any = document.querySelector("[id='trainer-info']");
    const reviewsSection: any = document.querySelector("[id='reviews-section']");
    const navbar: any = document.getElementById("nav");
    const rootFontSize = parseFloat(
      window
        .getComputedStyle(document.getElementsByTagName("html")[0])
        .getPropertyValue("font-size")
    );

    if (reviewsSection?.offsetHeight == 0) {
      setReviewsSectionExist(false);
    }


    window.addEventListener("scroll", () => {
      if (reviewsSection?.offsetHeight == 0) {
        setReviewsSectionExist(false);
      }

      if (window.scrollY <= ((whatYouWillLearnSection?.getBoundingClientRect().top) + window.scrollY - (navbar.offsetHeight * 2))) {
        setSectionSelection("");
        

      } else if (window.scrollY >= ((whatYouWillLearnSection?.getBoundingClientRect().top) + window.scrollY - (navbar.offsetHeight * 2)) && window.scrollY <= ((courseContentSection?.getBoundingClientRect().top) + window.scrollY - (navbar.offsetHeight * 2))) {
        setSectionSelection("what-you-will-learn");
        console.log("what-you-will-learn");


      } else if (window.scrollY >= ((courseContentSection?.getBoundingClientRect().top) + window.scrollY - (navbar.offsetHeight * 2)) && window.scrollY <= ((trainerInfoSection?.getBoundingClientRect().top) + window.scrollY - (navbar.offsetHeight * 2))) {
        setSectionSelection("course-content");
        console.log("course-content");


      } else if (window.scrollY >= ((trainerInfoSection?.getBoundingClientRect().top) + window.scrollY - (navbar.offsetHeight * 2)) && window.scrollY <= ((reviewsSection?.getBoundingClientRect().top == 0 ? 999999 : reviewsSection?.getBoundingClientRect().top ) + window.scrollY - (navbar.offsetHeight * 2))) {
        setSectionSelection("trainer-info");
        console.log("trainer-info");

      } else if ((window.scrollY >= ((reviewsSection?.getBoundingClientRect().top) + window.scrollY - (navbar.offsetHeight * 2))) &&
      !reviewsSectionExist ) {
        setSectionSelection("reviews-section");

      } else {
        setSectionSelection("");
      }
    })


    return () => {
      window.removeEventListener("scroll", () => {
        return;
      });
    };
  }, []);

  useEffect(() => {
    
    // console.log(sectionSelection);
    
  }, [sectionSelection])
  


  return (
    <>
      <div className={styles["tabs-responsive-bar"]} id="tabs-responsive-bar">
        <div className={`${sectionSelection == "what-you-will-learn" ? styles["tabs-responsive-bar__list-item--active"] : styles["tabs-responsive-bar__list-item"]}`}>
          <a href="#what-you-will-learn" onClick={() => { setSectionSelection("what-you-will-learn") }}>عن الدورة</a>
        </div>
        <div className={`${sectionSelection == "course-content" ? styles["tabs-responsive-bar__list-item--active"] : styles["tabs-responsive-bar__list-item"]}`}>
          <a href="#course-content" onClick={() => { setSectionSelection("course-content") }}>المنهج</a>
        </div>
        <div className={`${sectionSelection == "trainer-info" ? styles["tabs-responsive-bar__list-item--active"] : styles["tabs-responsive-bar__list-item"]}`}>
          <a href="#trainer-info" onClick={() => { setSectionSelection("trainer-info") }}>المدرب</a>
        </div>
       { reviewsSectionExist &&  <div id="reviews-option" className={`${sectionSelection == "reviews-section" ? styles["tabs-responsive-bar__list-item--active"] : styles["tabs-responsive-bar__list-item"]}`}>
          <a href="#reviews-section" onClick={() => { setSectionSelection("reviews-section") }}>التقييمات</a>
        </div>}
      </div>
    </>
  );
}

