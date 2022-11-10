/* eslint-disable @next/next/no-img-element */
import React,{ useState, useEffect } from "react";
import styles from "./statistics.module.css";
import { Row, Col } from "react-bootstrap";
import { LearnersOutlinedIcon, CoursesIcon, TrainersIcon, ExperienceIcon } from "common/Icons/Icons";
import { useSelector } from "react-redux";

export default function Statistics() {
  const [startCounter, setStartCounter] = useState<any>(false);
  const themeState = useSelector((state: any) => state.themeState.theme);

  useEffect(() => {
    const stasticsSection:any = document.getElementById("animated-stastics-section") ;
  
    return () => {
      window.removeEventListener("scroll" , ()=>{
      null;
    })
    }
  }, [])
  

  return (
    <>
      <Row data-theme={themeState} className={styles["statistics-row"]} >
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

                                <LearnersOutlinedIcon color="#af151f"/>
                              </div>
                            </div>
                        <div className={styles["statistics__details__counter"]}>
                            <span id="users-count">+2.9</span>
                            <span>مليون</span>
                        </div>
                        <div className={styles["statistics__details__unit"]}>مستخدم</div>
                    </div>
                    <div className={styles["statistics__details__card"]}>
                        <div>

                          <div className={styles["statistics__details__img"]}>
                            <CoursesIcon color="#af151f"/>
                          </div>

                            </div>
                        <div className={styles["statistics__details__counter"]}>
                            <span id="edu-courses-count">+900</span>
                        </div>
                        <div className={styles["statistics__details__unit"]}>دورة تدريبية</div>
                    </div>
                    <div className={styles["statistics__details__card"]}>
                        <div>
                          <div className={styles["statistics__details__img"]}>
                            <TrainersIcon color="#af151f"/>   
                          </div>

                            </div>
                        <div className={styles["statistics__details__counter"]}>
                            <span id="trainers-count">+500</span>
                        </div>
                        <div className={styles["statistics__details__unit"]}>خبير ومدرب</div>
                    </div>
                    <div className={styles["statistics__details__card"]}>
                        <div>

                          <div className={styles["statistics__details__img"]}>

                            <ExperienceIcon color="#af151f"/>
                          </div>

                             </div>
                        <div className={styles["statistics__details__counter"]}>
                            <span id="exp-years-count">+10</span>
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
