/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./courses-departments.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";

export default function CoursesDepartments() {
    SwiperCore.use([Navigation]);
  return (
    <>
      <Row>
        <Col xs={12} className={styles["courses-departments__container"]}>
          <div className={styles["courses-departments__container__title"]}>
            <span> أقسام </span>
            <span> الدورات </span>
          </div>

          <Button className={styles["courses-departments__container__show-all-btn"]}>
            أعرض كل الأقسام
            <svg id="more" xmlns="http://www.w3.org/2000/svg" width="0.5rem" height="0.875rem" viewBox="0 0 8.39 14">
  <path id="Path_12841" data-name="Path 12841" d="M11.567,6.006a1.346,1.346,0,0,1,.229-.183L17.222.4A1.356,1.356,0,0,1,19.14,2.315L14.467,6.988l4.7,4.7A1.356,1.356,0,1,1,17.247,13.6L11.8,8.153a1.407,1.407,0,0,1-.229-2.147Z" transform="translate(-11.172 -0.001)" fill="#af151f"/>
</svg>

          </Button>
        </Col>

    <Col xs={12} className={styles['courses-departments__cards-carousel']}>
        <Swiper dir="rtl" slidesPerView={7} navigation={true} pagination={{"clickable": true}} 
        breakpoints={{
            "751": {
                "slidesPerView": 7,
            },
        }} className="mySwiper">
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide> <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                            <div>

                                <div className="d-flex justify-content-center">

                                    <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.75rem" viewBox="0 0 30.001 28">
  <g id="Family" transform="translate(54.95 -177)">
    <g id="Group_11937" data-name="Group 11937" transform="translate(-54.95 177)">
      <path id="Path_15090" data-name="Path 15090" d="M-25.022,324.556s-3.588-9.709-4.47-11.515-1.758-2.94-5.119-2.94h-.684c-3.366,0-4.236,1.134-5.125,2.94-.036.066-.072.15-.114.24-.768-.828-1.9-1.3-4.08-1.3H-45.3c-3.354,0-4.236,1.128-5.119,2.94s-4.464,11.509-4.464,11.509a.849.849,0,0,0,.444,1.116.863.863,0,0,0,1.116-.45l4.891-9.667-1.806,11.089H-42.4v-.594s.018-3.474-1.7-4.765l-3.018-2.352a.824.824,0,0,1-.144-1.164.853.853,0,0,1,1.044-.216l2.316,1.134a9.629,9.629,0,0,0,4.224.978h0a9.629,9.629,0,0,0,4.224-.978l2.316-1.134a.854.854,0,0,1,1.044.216.824.824,0,0,1-.144,1.164l-3.018,2.352c-1.71,1.29-1.7,4.765-1.7,4.765v.594h6.169l.084-11.455,4.128,8.161a.859.859,0,0,0,1.116.45A.846.846,0,0,0-25.022,324.556Zm-14.648-3.69a2.553,2.553,0,0,1-2.562-2.544,2.552,2.552,0,0,1,2.538-2.562,2.553,2.553,0,0,1,2.562,2.544A2.548,2.548,0,0,1-39.669,320.865Z" transform="translate(54.95 -302.113)" fill="#fff"/>
      <path id="Path_15091" data-name="Path 15091" d="M59.06,223.209a3.354,3.354,0,1,0-3.36-3.354A3.357,3.357,0,0,0,59.06,223.209Z" transform="translate(-49.06 -214.13)" fill="#fff"/>
      <path id="Path_15092" data-name="Path 15092" d="M221.806,184.2a3.6,3.6,0,1,0-3.606-3.6A3.6,3.6,0,0,0,221.806,184.2Z" transform="translate(-201.809 -177)" fill="#fff"/>
      <rect id="Rectangle_3798" data-name="Rectangle 3798" width="1" height="2" transform="translate(6 26)" fill="none"/>
    </g>
  </g>
</svg>

                                    </div>
                                </div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>الصحة</div>
                                <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
                                    12930 متعلم 
                                </div>
                            </div>
                        </div>
            </SwiperSlide>
  
        </Swiper>
    </Col>
</Row>
    </>
  );
}
