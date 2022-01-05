import React from "react";
import styles from "./mobile-nav-tabs-bar.module.css";

export default function MobileCheckoutBar() {
  return (
    <>
      <div className={styles["tabs-responsive-bar"]} id="tabs-responsive-bar">
        <div>
          <a href="#what-you-will-learn">عن الدورة</a>
        </div>
        <div>
          <a href="#course-content">المنهج</a>
        </div>
        <div>
          <a href="#trainer-info">المدرب</a>
        </div>
        <div>
          <a href="#reviews-section">التقييمات</a>
        </div>
      </div>
    </>
  );
}
/* 
what-you-will-learn-list 
course-content 
trainer-info
reviews-section
*/
