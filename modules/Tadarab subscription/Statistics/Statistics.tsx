/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./statistics.module.css";
import { Row, Col } from "react-bootstrap";
import { LearnersOutlinedIcon, CoursesIcon, TrainersIcon, ExperienceIcon, TickIcon } from "common/Icons/Icons";
import { animateValue } from "modules/_Shared/utils/statsticsAnimatedValues";
import LatestCourses from '../Latest courses/LatestCourses';
import Image from 'next/image';

export default function Statistics() {
  const [startCounter, setStartCounter] = useState<any>(false);

  useEffect(() => {
    const stasticsSection: any = document.getElementById("animated-stastics-section");
    // const rootFontSize = parseFloat(
    //   window
    //     .getComputedStyle(document.getElementsByTagName("html")[0])
    //     .getPropertyValue("font-size")
    // );

    // window.addEventListener("scroll", () => {
    //   if ((window.scrollY + (15 * rootFontSize)) >= (stasticsSection?.offsetTop)) {
    //     setStartCounter(true);
    //   }

    // })

    return () => {
      window.removeEventListener("scroll", () => {
        null;
      })
    }
  }, [])


  // animateValue("value", 100, 25, 5000);

  return (
    <>
      <Row className="d-flex justify-content-center">


        <Col xs={12} sm={6} className={styles["marketing-boxes__box"]}>
          <div className={styles["marketing-boxes__title"]}>
            <div> اشترك الآن لوصول 
              <span className={styles["marketing-boxes__title--important"]}>
              غير محدود
              </span>
              لأكبر مكتبة إلكترونية عربية بالخليج.
              </div>
          </div>
          <div className={styles["marketing-boxes__brief"]}>
            
            <div className={styles["marketing-boxes__brief__list-item"]}>
              <div>
               <TickIcon/>

              </div>
              <span>

              	مشاهدة بلا حدود لجميع الدورات بالمنصة (أكثر من
                <span className={styles["marketing-boxes__title--important"]}>
                 700
                </span>
                  دورة تدريبية).
              </span>
            </div>
            <div className={styles["marketing-boxes__brief__list-item"]}>
              <div>
               <TickIcon/>

              </div>
               <span>
                 <span className={styles["marketing-boxes__title--important"]}>

               	دورات جديدة
                 </span>
                  تضاف شهريًا.
                  </span>
            </div>
            <div className={styles["marketing-boxes__brief__list-item"]}>
              <div>
               <TickIcon/>

              </div>
               <span>
                
               	عدد لا نهائي من
                 <span className={styles["marketing-boxes__title--important"]}>

                  شهادات
                 </span>
                   إتمام الدورات.
              </span>
            </div>
            <div className={styles["marketing-boxes__brief__list-item"]}>
              <div>
               <TickIcon/>

              </div>
               <span>
                
               	ملخصات
                 <span className={styles["marketing-boxes__title--important"]}>

                  كتب إلكترونية
                 </span>
                   حصرية.
              </span>
            </div>
            <div className={styles["marketing-boxes__brief__list-item"]}>
              <div>
               <TickIcon/>

              </div>
               <span>
                
               	دورات
                  <span className={styles["marketing-boxes__title--important"]}>
                  بث مباشر
                 </span>
                   تفاعلية حصرية.
              </span>
            </div>
            <div className={styles["marketing-boxes__brief__list-item"]}>
              <div>
               <TickIcon/>

              </div>
               <span>
               	إمكانية متابعة الدورات من
                 <span className={styles["marketing-boxes__title--important"]}>
                  أي جهاز 
                 </span>
                 وبأي وقت.
              </span>
            </div>
            <div className={styles["marketing-boxes__brief__list-item"]}>
              <div>
               <TickIcon/>

              </div>
               <span>
               	إمكانية
                  <span className={styles["marketing-boxes__title--important"]}>
                  تحميل وطباعة المرفقات
                 </span>
                   والتمارين لسهولة التطبيق.
              </span>
            </div>
            <div className={styles["marketing-boxes__brief__list-item"]}>
              <div>
               <TickIcon/>

              </div>
               <span>
               	لا يوجد التزام، يمكنك
                 <span style={{fontWeight:"700"}} className={styles["marketing-boxes__title--important"]}>
                  إلغاء الاشتراك
                 </span>
                   في أي وقت.
              </span>
            </div>

          </div>
        </Col>
        <Col xs={12} sm={6} className={styles["marketing-boxes__box"]}>
          <div className={`${styles["marketing-boxes__image"]}  d-flex justify-content-end`}>
            <Image src="/images/subs.jpg" alt="discriptive image" />
          </div>
        </Col>

        <LatestCourses/>


        <Col xs={12} sm={10} className="d-flex justify-content-center">
          <div id="animated-stastics-section" className={styles["statistics"]}>

            <div className={styles["statistics__title"]}>
              <span> أرقامنا </span>
              <span> في العالم العربي </span>
            </div>

            <div className={styles["statistics__breif"]}>
              منصة تدرب الرائدة في مجال التدريب في الخليج والوطن العربي منذ أكثر
              من 10 سنوات في مجال التعلم من بعد
            </div>

            <div className={styles["statistics__details"]}>
              <div className={styles["statistics__details__card"]}>
                <div>
                  <div className={styles["statistics__details__img"]}>

                    <LearnersOutlinedIcon color="#af151f" />
                  </div>
                </div>
                <div className={styles["statistics__details__counter"]}>
                  <span id="users-count">+2.6</span>
                  {/* <span id="users-count">+{startCounter ? animateValue("users-count", 0, 2, 5000) : ""}</span> */}
                  <span>مليون</span>
                </div>
                <div className={styles["statistics__details__unit"]}>مستخدم</div>
              </div>
              <div className={styles["statistics__details__card"]}>
                <div>

                  <div className={styles["statistics__details__img"]}>
                    <CoursesIcon color="#af151f" />
                  </div>

                </div>
                <div className={styles["statistics__details__counter"]}>
                  {/* <span id="edu-courses-count">+{startCounter ? animateValue("edu-courses-count", 0, 500, 5000) : "0"}</span> */}
                  <span id="edu-courses-count">+750</span>
                </div>
                <div className={styles["statistics__details__unit"]}>دورة تدريبية</div>
              </div>
              <div className={styles["statistics__details__card"]}>
                <div>
                  <div className={styles["statistics__details__img"]}>
                    <TrainersIcon color="#af151f" />
                  </div>

                </div>
                <div className={styles["statistics__details__counter"]}>
                  <span id="trainers-count">+400</span>
                  {/* <span id="trainers-count">+{startCounter ? animateValue("trainers-count", 0, 400, 5000) : "0"}</span> */}
                </div>
                <div className={styles["statistics__details__unit"]}>خبير ومدرب</div>
              </div>
              <div className={styles["statistics__details__card"]}>
                <div>

                  <div className={styles["statistics__details__img"]}>

                    <ExperienceIcon color="#af151f" />
                  </div>

                </div>
                <div className={styles["statistics__details__counter"]}>
                  <span id="exp-years-count">+10</span>
                  {/* <span id="exp-years-count">+{startCounter ? animateValue("exp-years-count", 0, 10, 5000) : "0"}</span> */}
                </div>
                <div className={styles["statistics__details__unit"]}>سنوات خبرة</div>
              </div>

            </div>

          </div>

        </Col>
      </Row>
    </>
  );
}
