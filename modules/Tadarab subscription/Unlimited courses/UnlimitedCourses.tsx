/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./unlimited-courses.module.css";
import { Row,Col,Form,Button } from "react-bootstrap";
import { SearchIcon, ChevronLeftIcon } from "common/Icons/Icons";

export default function UnlimitedCourses() {
  return (
      <Row className={styles["unlimited-courses"]}>
          <Col xs={12}>

              <div className={styles["unlimited-courses__title"]}>
                  <div>
                    دورات تدريبية 
                    <span>
                    بلا حدود 
                    </span>

                  </div>
                  <div>
                      من أفضل المدربين العرب       
                  </div>
              </div>
              
              <div className={styles["unlimited-courses__brief"]}>
              تدرب الآن من اي مكان وفي اي وقت
              </div>

              <div className={styles["unlimited-courses__search-bar-container"]}>
              
              <Form.Control
                type="text"
                placeholder="ادخل ايميلك هنا..."
                className={
                  styles["unlimited-courses__search-bar-container__search-bar"]
                }
              />
              <Button className={styles["unlimited-courses__search-bar__btn"]}>
              ابدأ الآن
              <ChevronLeftIcon color="#fff"/>
              </Button>
            </div>

              <div className={styles["unlimited-courses__subscription-value"]}>
              قيمة الاشتراك
              <span>100</span>
              دك/شهرياً
              </div>

          </Col>
          {/* <Col xs={12} sm={6}>
              <div className={styles["unlimited-courses__video-container"]}>
                  <img src="/images/VideoPlaceholder.png" alt="promo video" />
              </div>
          </Col> */}
      </Row>
  )
}
