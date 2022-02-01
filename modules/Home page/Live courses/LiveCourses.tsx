/* eslint-disable @next/next/no-img-element */
import React , { useEffect ,useState} from "react";
import styles from "./live-courses.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import  {ChevronLeftIcon,LiveIcon,PlayIcon,CartIcon,FavouriteIcon,AddedToCartIcon,AddedToFavouriteIcon,BellIcon}  from "common/Icons/Icons";


export default function LiveCourses() {
    SwiperCore.use([Navigation]);

    const [liveCourses, setLiveCourses] = useState([]);

    useEffect(() => {
      
      axiosInstance
      .get("home/?country_code=eg")
      .then(function (response:any) {
        setLiveCourses(response.data.data.live_courses);
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
            <ChevronLeftIcon color="#af151f"/>

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

            {  liveCourses.map((lc:any,i:number)=>{
              return(
                <SwiperSlide key={i}> 
                  <Card className={`${ lc.price == 0 ? styles["live-courses__cards-carousel__card"] : styles["live-courses__cards-carousel__card--paid"] } 
                  `}>
                      <div
                        className={
                          styles[
                            "live-courses__cards-carousel__course-card__category-chip"
                          ]
                        }
                        style={{backgroundColor:lc.categories[0]?.color}}
                      >
                          {lc.categories[0]?.title}
                      </div>
                      <div
                        className={
                          styles[
                            "live-courses__cards-carousel__course-card__duration-chip"
                          ]
                        }
                      >
                        <div>
                        { lc.full_date == Math.floor(Date.now() / 1000) && <LiveIcon/>}
                        </div>
                        <div>

                          { lc.full_date == Math.floor(Date.now() / 1000) ? <span>مباشر الأن</span> :  <span>{lc.short_date}</span>}
                        </div>
                      </div>
                          <Card.Img variant="top" src={lc.image} alt='trainer image'
                          className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                          <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                              <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                                  <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                      <h1 className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>{lc.title}</h1>
                                      <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>{lc.trainer.name_ar}</div>
                                  </div>
                                  <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                                  </div>
                              </div>


                              <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                                <div>
                                  <div
                                    className={
                                      styles[
                                        "live-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                      ]
                                    }
                                  >
                                    { lc.price !== 0 && <span
                                      className={
                                        styles[
                                          "live-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                        ]
                                      }
                                    >
                                    {lc.currency_code}
                                    </span>}

                                    <span
                                      className={
                                        styles[
                                          "live-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                        ]
                                      }
                                    >
                                      {lc.price == 0 ? "مجاناً" : lc.price}
                                    </span>
                                  
                                  </div>
                                  { (lc.price > lc.discounted_price) &&
                                  <div
                                    className={
                                      styles[
                                        "live-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                      ]
                                    }
                                  >
                                    <span
                                      className={
                                        styles[
                                          "live-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                        ]
                                      }
                                    >
                                      {lc.currency_code}
                                    </span>
                                    <span
                                      className={
                                        styles[
                                          "live-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                        ]
                                      }
                                    >
                                      {lc.discounted_price}
                                    </span>
                                  
                                  </div>
                                  }
                                </div>
                                  <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]}>
                                    {lc.price == 0 ? <BellIcon/> :<CartIcon color="#222"/>}
                                  </Button>
                              </div>
                          </Card.Body>
                          {lc.full_date == Math.floor(Date.now() / 1000) && <div className={styles["live-courses__cards-carousel__card__live-icon"]}>
                              <PlayIcon/>

                          </div>}
                  </Card> 
                </SwiperSlide>

              )
            })
            }
        
          
        </Swiper>
        </Col>
      </Row>
    </>
  );
}

  