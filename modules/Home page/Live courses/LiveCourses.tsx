/* eslint-disable @next/next/no-img-element */
import React , { useEffect ,useState} from "react";
import styles from "./live-courses.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { axiosInstance } from "configurations/axios/axiosConfig";

export default function LiveCourses() {
    SwiperCore.use([Navigation]);

    const [liveCourses, setLiveCourses] = useState([]);

    useEffect(() => {
      
      axiosInstance
      .get("home/?country_code=eg")
      .then(function (response:any) {
        setLiveCourses(response.data.data.live_courses);
        // console.log("response",response.data.data.live_courses);
      })
      .catch(function (error) {
        console.log(error);
      });

    
      return () => {
      };
    }, []);
    
  return (
    <>
      <Row>
        <Col xs={{span:12 , order:1}} sm={{span:9 , order:1}} className={styles["live-courses__title"]}> 
          <div>
            <span> الدورات </span>
            <span> المباشرة </span>
          </div>
        </Col>
        <Col xs={{span:12 , order:3}} sm={{span:3 , order:1}} className={styles["live-courses__see-more-btn-col"]}>

          <Button className={styles["live-courses__see-more-btn"]}>
            اعرض المزيد
            <svg id="more" xmlns="http://www.w3.org/2000/svg" width="0.5rem" height="0.875rem" viewBox="0 0 8.39 14">
               <path id="Path_12841" data-name="Path 12841" d="M11.567,6.006a1.346,1.346,0,0,1,.229-.183L17.222.4A1.356,1.356,0,0,1,19.14,2.315L14.467,6.988l4.7,4.7A1.356,1.356,0,1,1,17.247,13.6L11.8,8.153a1.407,1.407,0,0,1-.229-2.147Z" transform="translate(-11.172 -0.001)" fill="#af151f"/>
            </svg>

          </Button>

        </Col>

        <Col xs={{span:12 , order:2}} sm={{span:12 , order:2}} className={styles["live-courses__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={4} navigation={true} pagination={{"clickable": true}} 
        breakpoints={{
          "50": {
            slidesPerView: 1,
          },
          "576": {
            slidesPerView: 3,
          },
          "981": {
            slidesPerView: 4,
          },
          "1201": {
            slidesPerView: 5,
          },
        }} className="mySwiper">
            <SwiperSlide> 
              <Card className={styles["live-courses__cards-carousel__card"]}>
                  <div
                    className={
                      styles[
                        "live-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                      تنمية بشرية
                  </div>
                  <div
                    className={
                      styles[
                        "live-courses__cards-carousel__course-card__duration-chip"
                      ]
                    }
                  >
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 26 26">
  <defs>
    <filter id="live_now" x="0" y="0"  filterUnits="userSpaceOnUse">
      <feOffset dy="3" />
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#live_now)">
    <circle id="live_now-2" data-name="live now" cx="4" cy="4" r="4" transform="translate(9 6)" fill="red"/>
  </g>
</svg>

                      
                    </div>
                    <div>

                      <span>مباشر الأن</span>
                    </div>
                  </div>
                      <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                      className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                      <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                          <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                              <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                  <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                  <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                              </div>
                              <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                              </div>
                          </div>
                          <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                              <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                              <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                              
                              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                              </Button>
                          </div>
                      </Card.Body>
                      <div className={styles["live-courses__cards-carousel__card__live-icon"]}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="2rem" viewBox="0 0 31.996 34">
  <defs>
    <filter id="play_circle" x="0" y="0" width="31.996" height="34" filterUnits="userSpaceOnUse">
      <feOffset />
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood />
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#play_circle)">
    <path id="play_circle-2" data-name="play circle" d="M19.62,11.921l-11-6.686A1.5,1.5,0,0,0,6.392,6.547v13a1.5,1.5,0,0,0,2.231,1.312l11-6.311A1.5,1.5,0,0,0,19.62,11.921Z" transform="translate(2.61 3.96)" opacity="0.4"/>
  </g>
</svg>

                      </div>
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide> 
                <Card className={styles["live-courses__cards-carousel__card"]}>
                <div
                  className={
                    styles[
                      "live-courses__cards-carousel__course-card__category-chip"
                    ]
                  }
                >
                    تنمية بشرية
                </div>
                    <Card.Img variant="top" src="/images/course2.png" alt='trainer image'
                    className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                    <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                        <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>مفاتيح النجاح في الحياة</h1>
                                <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>د. حسين عبدالكريم</div>
                            </div>
                            <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                            </div>
                        </div>
                        <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                            <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details__price"]}>مجانا</div>
                            <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
</svg>

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

  