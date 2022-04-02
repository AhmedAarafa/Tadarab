/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./why-tadarab.module.css";
import { Row, Col, Button } from "react-bootstrap";

export default function WhyTadarab() { 
    return (
        <>

        <Row>
            <Col xs={12} className={styles["why-tadarab"]}>
                <div className={styles["why-tadarab__title"]}>
                    <span> لماذا </span>
                    <span>  تدرب  </span>
                </div>
            </Col>
            <Col xs={12} className={styles["why-tadarab__advantages-box-container"]}>

                <div className={styles["why-tadarab__advantages-box"]}>
                    <div >
                        <svg className={styles["why-tadarab__advantages-box__img"]} xmlns="http://www.w3.org/2000/svg" width="4.375rem" height="4.375rem" viewBox="0 0 70 70">
  <path id="course" d="M59.329,40.46,34.49,25.359a3.393,3.393,0,0,0-5.038,2.964V57.677a3.4,3.4,0,0,0,5.038,2.964L59.329,46.387A3.4,3.4,0,0,0,59.329,40.46ZM78,43A35,35,0,1,0,43,78,34.994,34.994,0,0,0,78,43ZM14.774,43A28.226,28.226,0,1,1,43,71.226,28.218,28.218,0,0,1,14.774,43Z" transform="translate(-8 -8)" fill="#af151f"/>
</svg>

                    </div>
                    <div className={styles["why-tadarab__advantages-box__advantage"]}>
                        <div>أفضل الدورات</div>
                        <div>دورات أونلاين مسجلة بجودة عالية</div>
                    </div>
                </div>
                <div className={styles["why-tadarab__advantages-box"]}>
                    <div >
                        <svg className={styles["why-tadarab__advantages-box__img"]} xmlns="http://www.w3.org/2000/svg" width="4.375rem" height="4.375rem" viewBox="0 0 89.302 40">
  <g id="infinity" transform="translate(0 -141.333)">
    <g id="Group_10119" data-name="Group 10119" transform="translate(0 141.333)">
      <path id="Path_12885" data-name="Path 12885" d="M69.209,141.333a19.851,19.851,0,0,0-14.046,5.712l-10.512,9.3-.019-.019L39,161.3l.037.037L29,170.226a12.588,12.588,0,1,1-8.912-21.451,12.712,12.712,0,0,1,9.079,3.832l4.223,3.74,5.619-4.967-4.707-4.167a19.99,19.99,0,1,0-.167,28.428l10.512-9.321.019.019,5.619-4.986-.019-.019L60.3,152.459a12.582,12.582,0,1,1,8.912,21.432,12.769,12.769,0,0,1-9.079-3.814l-4.223-3.74-5.619,4.986L55,175.491a20.053,20.053,0,1,0,14.214-34.158Z" transform="translate(0 -141.333)" fill="#af151f"/>
    </g>
  </g>
</svg>

                    </div>
                    <div className={styles["why-tadarab__advantages-box__advantage"]}>
                        <div>متاحة في أي وقت </div>
                        <div>الدورات تكون في حسابك مدى الحياة</div>
                    </div>
                </div>
                <div className={styles["why-tadarab__advantages-box"]}>
                    <div >
                        
                        <svg className={styles["why-tadarab__advantages-box__img"]} xmlns="http://www.w3.org/2000/svg" width="4.375rem" height="4.375rem" viewBox="0 0 69.022 64">
  <g id="wallet" transform="translate(0.996 -18.098)">
    <path id="Path_12886" data-name="Path 12886" d="M60.9,33.327h-.834v-8.1a6.137,6.137,0,0,0-6.13-6.13H9.469A9.477,9.477,0,0,0,.05,27.637c-.071.338-.046-2.675-.046,44A9.475,9.475,0,0,0,9.469,81.1H60.9a6.137,6.137,0,0,0,6.13-6.13V39.457a6.137,6.137,0,0,0-6.13-6.13ZM9.469,23.309H53.931a1.922,1.922,0,0,1,1.92,1.92v8.1H9.469a5.26,5.26,0,0,1-5.248-5.009A5.26,5.26,0,0,1,9.469,23.309ZM60.9,76.887H9.469a5.26,5.26,0,0,1-5.254-5.254V35.942a9.41,9.41,0,0,0,5.254,1.6H60.9a1.922,1.922,0,0,1,1.92,1.92v8.535H46.971a9.786,9.786,0,1,0,0,19.571H62.815v7.4a1.922,1.922,0,0,1-1.92,1.92Zm1.92-13.534H46.971a5.575,5.575,0,1,1,0-11.15H62.815Z" transform="translate(0)" fill="#af151f" stroke="#af151f" />
    <circle id="Ellipse_157" data-name="Ellipse 157" cx="3.051" cy="3.051" r="3.051" transform="translate(44.697 54.727)" fill="#af151f"/>
  </g>
</svg>

                    </div>
                    <div className={styles["why-tadarab__advantages-box__advantage"]}>
                        <div>أقل تكلفة</div>
                        <div>أقل سعر دورات مقابل الجودة</div>
                    </div>
                </div>
               
            </Col>
            {/* <Col xs={12}>
                <div className={styles["tadarab-for-companies"]}>

                    <div>
                        <img src="/images/businesss.png" alt="manager" className={styles["tadarab-for-companies__img"]}/>
                    </div>

                    <div className={styles["tadarab-for-companies__titles-box"]}>
                        <div className={styles["tadarab-for-companies__titles-box__title"]}>
                            <span> تدرب </span>
                            <span> للشركات </span>
                        </div>
                        <div className={styles["tadarab-for-companies__titles-box__breif"]}>
                            دورات عالية الجودة في جميع المجالات والعلوم والمعارف المختلفة
                            </div>
                      <Button className={styles["tadarab-for-companies__titles-box__btn"]}>تواصل معانا</Button>
                    </div>
                    
                </div> 
            </Col> */}
        </Row>
            
        </>
    )
}
