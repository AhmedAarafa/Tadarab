/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./books.module.css";
import { Row, Col, Button, Card, Carousel, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";

export default function Books() {
    SwiperCore.use([Navigation]);

  return (
    <>
      <Row className={styles["books__row"]}>
        <Col xs={12} className={styles["books__title"]}>
          <div>
            <span> الكتب و </span>
            <span> الملخصات </span>
          </div>
          <Button className={styles["books__see-more-btn"]}>
            تصفح المزيد من الكتب المجانية
            <svg id="more" xmlns="http://www.w3.org/2000/svg" width="0.5rem" height="0.875rem" viewBox="0 0 8.39 14">
  <path id="Path_12841" data-name="Path 12841" d="M11.567,6.006a1.346,1.346,0,0,1,.229-.183L17.222.4A1.356,1.356,0,0,1,19.14,2.315L14.467,6.988l4.7,4.7A1.356,1.356,0,1,1,17.247,13.6L11.8,8.153a1.407,1.407,0,0,1-.229-2.147Z" transform="translate(-11.172 -0.001)" fill="#af151f"/>
</svg>

          </Button>
        </Col>
        <Col xs={12} className={styles["books__cards-carousel"]}> 
        <Swiper dir="rtl" slidesPerView={5} navigation={true} pagination={{"clickable": true}} 
        breakpoints={{
            "751": {
                "slidesPerView": 5,
            },
        }} className="mySwiper">
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["books__cards-carousel__card"]}>
                                    <Card.Img
                                    variant="top"
                                    src="/images/book4.png"
                                    alt="book image"
                                    className={
                                        styles["books__cards-carousel__card__book-img"]
                                    }
                                    />
                                    <Card.Body
                                    className={styles["books__cards-carousel__card__card-body"]}
                                    >
                                        <div className={styles["books__cards-carousel__card__card-body__title"]}>أخطر نقاط الفشل</div>
                                        <div className={styles["books__cards-carousel__card__card-body__category"]}>بيزنس</div>
                                        <div className="w-100">
                                            <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                
                                                <svg id="download_" data-name="download " xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1.25rem" viewBox="0 0 18.75 20">
  <g id="Group_2242" data-name="Group 2242" transform="translate(4.375)">
    <g id="Group_2241" data-name="Group 2241" transform="translate(0)">
      <path id="Path_1066" data-name="Path 1066" d="M137.942,9.116a.623.623,0,0,0-.569-.366h-2.5V.625A.625.625,0,0,0,134.248,0h-2.5a.625.625,0,0,0-.625.625V8.75h-2.5a.625.625,0,0,0-.47,1.036l4.375,5a.624.624,0,0,0,.94,0l4.375-5A.623.623,0,0,0,137.942,9.116Z" transform="translate(-127.998)" fill="#af151f"/>
    </g>
  </g>
  <g id="Group_2244" data-name="Group 2244" transform="translate(0 13.75)">
    <g id="Group_2243" data-name="Group 2243" transform="translate(0)">
      <path id="Path_1067" data-name="Path 1067" d="M32.25,352v3.75H18.5V352H16v5a1.25,1.25,0,0,0,1.25,1.25H33.5A1.249,1.249,0,0,0,34.75,357v-5Z" transform="translate(-16 -352)" fill="#af151f"/>
    </g>
  </g>
</svg>
                                                
                                                <span>  تحميل مجاني </span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                </Card> 
            </SwiperSlide>
          
        </Swiper>
        </Col>
      </Row>
    </>
  );
}


